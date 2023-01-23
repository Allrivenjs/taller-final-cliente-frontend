import { useNavigate } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
  IconButton,
  HStack,
  Text,
} from '@chakra-ui/react';

import { EditIcon } from '@chakra-ui/icons';

export const CompromisosTable = ({ compromisos = [] }) => {
  const navigate = useNavigate();

  const onViewActa = async (id) => {
    navigate(`/actas/view/${id}`);
  };

  if (compromisos.length < 1) {
    return (
      <Card mt={4} p={2} py={6} justifyContent='center' alignItems={'center'}>
        <Text colorScheme='gray'>No hay resultados</Text>
      </Card>
    );
  }

  return (
    <Card mt={4} p={2}>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Descripción</Th>
              <Th>Hora incio</Th>
              <Th>Hora final</Th>
            </Tr>
          </Thead>
          <Tbody>
            {compromisos.map(
              ({
                id,
                compromisos
              }, index) => (
                <Tr key={index}>
                  <Td>{compromisos[0].id}</Td>
                  <Td>{compromisos[0].pivot.descripcion}</Td>
                  <Td>{compromisos[0].pivot.fecha_inicio}</Td>
                  <Td>{compromisos[0].pivot.fecha_final}</Td>
                  <Td>
                    <HStack>
                      <IconButton
                        size='sm'
                        colorScheme='green'
                        icon={<EditIcon />}
                        onClick={() => onViewActa(id)}
                      />
                    </HStack>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};
