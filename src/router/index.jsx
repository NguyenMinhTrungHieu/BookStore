import { Route, Routes } from 'react-router-dom';
import HomePage from '~/pages/Home/HomePage.jsx';
import AboutPage from '~/pages/About/AboutPage.jsx';


function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
  );
}

export default AppRouter;
