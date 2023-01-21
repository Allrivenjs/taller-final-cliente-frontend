import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../componets/Sidebar';

export const AppLayout = ({children}) => {
  return(
    <>
      <Sidebar>
        <Container maxW='5xl'>
          <Outlet />
        </Container>
      </Sidebar>
    </>
  );
};
