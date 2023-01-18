import { Outlet } from 'react-router-dom';
import { Sidebar } from '../componets/Sidebar';

export const AppLayout = ({children}) => {
  return(
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
};
