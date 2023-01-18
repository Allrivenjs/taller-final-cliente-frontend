import { Navigate, Route, Routes } from 'react-router-dom';
import { useCheckAuth } from '../auth/hooks/useCheckAuth';

import { AppRoutes } from '../app/routes/AppRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { SpinnerPage } from '../components';

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === 'verifiying') return <SpinnerPage />;

  return (
    <Routes>
      {status === 'logged' ? (
        <Route path='/*' element={<AppRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
