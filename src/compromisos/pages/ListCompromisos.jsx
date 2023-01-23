import { Box, Card, Divider, Heading, HStack, Spinner } from '@chakra-ui/react';

import { CompromisosTable } from '../components/CompromisosTable';

import { useListCompromisos } from '../hooks/useListCompromisos';

export const ListCompromisos = () => {
  const { loading, actasWithCompromisos } = useListCompromisos();

  return (
    <Box>
      <HStack alignItems='center' justifyContent='space-between' mb={4}>
        <Heading size='lg'>Lista de compromisos pendientes </Heading>
      </HStack>
      <Divider />

      {loading ? (
        <Card p={4} justifyContent='center' alignItems='center'>
          <Spinner />
        </Card>
      ) : (
        <CompromisosTable
          compromisos={actasWithCompromisos}
        />
      )}
    </Box>
  );
};
