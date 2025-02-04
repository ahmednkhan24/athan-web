import React from 'react';
// using HashRouter bc GitHub pages doesn't support the tech used by the BrowserRouter
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Times from './screens/Times';
import Content from './screens/Content';
import NavBar from './components/navbar';

const App: React.FC = () => {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/*">
          <Route index element={<Home />} />
          <Route path="times" element={<Times />} />
          <Route path="content" element={<Content />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
