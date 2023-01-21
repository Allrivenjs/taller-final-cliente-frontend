import { Box, Button, Divider, Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useListActas } from '../hooks/useListActas';

export const ListActas = () => {
  const { loading, actas } = useListActas();
  return (
    <Box>
      <HStack alignItems='center' justifyContent='space-between' mb={4}>
        <Heading size='lg'>Lista de actas</Heading>
        <Button colorScheme='blue' as={Link} to='/actas/create'>
          Crear acta
        </Button>
      </HStack>
      <Divider />
      <Box></Box>
    </Box>
  );
};
