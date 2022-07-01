import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import HomePage from '../pages/HomePage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <SigninPage />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Private Item={HomePage} />} />
          <Route path='/' element={<SigninPage />} />
          <Route exact path='/signup' element={<SignupPage />} />
          <Route path='*' element={<SigninPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
