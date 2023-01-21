import { Route, Routes } from 'react-router-dom';

import { ListActas, CreateActas } from '../pages';

export const ActasRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ListActas />} />
      <Route path='/create' element={<CreateActas />} />
    </Routes>
  );
};
