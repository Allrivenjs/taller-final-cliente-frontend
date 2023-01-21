import { Navigate, Route, Routes } from 'react-router-dom';

import { ActasRoutes } from '../../actas/routes/ActasRoutes';
import { AppLayout } from '../layout/AppLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='/' element={<>Dashboard</>} />
        <Route path='/actas/*' element={<ActasRoutes />} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
