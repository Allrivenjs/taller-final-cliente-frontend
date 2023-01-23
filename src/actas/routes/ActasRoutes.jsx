import { Route, Routes } from 'react-router-dom';

import { ListActas, CreateActas } from '../pages';
import { ViewActa } from '../pages/ViewActa';

export const ActasRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ListActas />} />
      <Route path='/create' element={<CreateActas />} />
      <Route path='/edit/:id' element={<CreateActas isEdit />} />
      <Route path='/view/:id' element={<ViewActa />} />
    </Routes>
  );
};
