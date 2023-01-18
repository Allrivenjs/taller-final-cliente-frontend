import { Navigate, Route, Routes } from 'react-router-dom';

import { ListActas } from '../pages/ListActas';

export const ActasRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <ListActas /> }/>
    </Routes>
  )
}
