import { BrowserRouter, Routes, Route } from 'react-router';
import { LoginPage } from './pages/login/LoginPage';
import { BuilderPage } from './pages/builder/BuilderPage';
import { CataloguePage } from './pages/catalogue/CataloguePage';
import { DronePage } from './pages/drone/DronePage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="catalogue" element={<CataloguePage />} />
        <Route path="builder" element={<BuilderPage />} />
        <Route path="drone" element={<DronePage />} />
      </Routes>
    </BrowserRouter>
  );
};
