import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import type { AppDispatch } from 'store';
import {
  onLoginSuccess,
  onLoginFailure,
  onLogout,
} from 'store/auth/authActions';
import Container from '@mui/material/Container';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container>
      <h1>Home page</h1>
      <Link to="/content">Content</Link>
      <br />
      <Link to="/times">Times</Link>
      <br />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
        buttonText="Login to Athan Web"
        onSuccess={(r) => dispatch(onLoginSuccess(JSON.stringify(r)))}
        onFailure={() => dispatch(onLoginFailure())}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
      <br />
      <br />
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
        buttonText="Logout of Athan Web"
        onLogoutSuccess={() => dispatch(onLogout())}
      />
    </Container>
  );
};

export default Home;
