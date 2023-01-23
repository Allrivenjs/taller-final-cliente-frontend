import { Route, Routes } from 'react-router-dom';

import { ListCompromisos } from '../pages';

export const CompromisosRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ListCompromisos />} />
    </Routes>
  );
};
