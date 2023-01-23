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

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

export const CompromisosTable = ({ compromisos = [], }) => {
  const navigate = useNavigate();

  const onViewActa = async (id) => {
    navigate(`/actas/view/${id}`);
  };

  if (actas.length < 1) {
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
              <Th>Asunto</Th>
              <Th>Creador</Th>
              <Th>Responsable</Th>
              <Th>Orden del día</Th>
              <Th>Hora incio</Th>
              <Th>Hora final</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {actas.map(
              ({
                id,
                asunto,
                creador,
                responsable,
                orden_del_dia,
                hora_inicio,
                hora_final,
              }) => (
                <Tr key={id}>
                  <Td>{asunto}</Td>
                  <Td>{creador.nombres}</Td>
                  <Td>{responsable.nombres}</Td>
                  <Td>{orden_del_dia}</Td>
                  <Td>{hora_inicio}</Td>
                  <Td>{hora_final}</Td>
                  <Td>
                    <HStack>
                      <IconButton
                        size='sm'
                        colorScheme='red'
                        icon={<DeleteIcon />}
                        onClick={() => onDeleteActa(id)}
                      />
                      <IconButton
                        size='sm'
                        colorScheme='blue'
                        icon={<EditIcon />}
                        onClick={() => onEditActa(id)}
                      />

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
