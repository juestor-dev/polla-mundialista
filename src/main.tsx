import { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css'

import App from './App';
import LoginPage from './pages/loginPage';
import ProfilePage from './pages/profilePage';
import RegisterPage from './pages/registerPage';
import LandingPage from './pages/landingPage';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './config/firebaseConfig';

const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<p>Cargando...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="*"
              element={<LandingPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </FirebaseAppProvider>
);
