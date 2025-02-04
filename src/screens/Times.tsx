import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Container from '@mui/material/Container';
import { useLocationContext, LocationState } from 'contexts/locationContext';

interface SalahTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Firstthird: string;
  Imsak: string;
  Lastthird: string;
  Midnight: string;
  Sunrise: string;
  Sunset: string;
}

async function getSalahTimes({ latitude, longitude }: LocationState) {
  const { data } = await fetch(
    `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&school=1`
  ).then((r) => r.json());
  return data.timings as SalahTimes;
}

const Times: React.FC = () => {
  const location = useLocationContext();
  const { data: times, isLoading } = useQuery({
    queryKey: ['salahTimes'],
    queryFn: async () => getSalahTimes(location),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!times) {
    return <div>idk</div>;
  }

  return (
    <Container>
      {Object.entries(times).map(([name, time]) => (
        <div key={name}>
          {name} - {time}
        </div>
      ))}
    </Container>
  );
};

export default Times;
