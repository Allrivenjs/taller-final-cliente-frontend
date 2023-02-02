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

import { axiosClient } from '../../lib';

export const ActasTable = ({ actas = [], deleteActas, }) => {
  const navigate = useNavigate();
  const onDeleteActa = async (actaToDeleteId) => {
    try {
      await axiosClient.post(`actas/delete/${actaToDeleteId}`);
      deleteActas(actaToDeleteId);
    } catch (e) {
      alert('Error trying to delete acta');
      console.log('Error trying to delete acta');
    };
  };

  const onEditActa = async (id) => {
    navigate(`/actas/edit/${id}`);
  };

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
  console.log(actas)

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
              <Th>Asistentes</Th>
              <Th>Cantidad de compromisos</Th>
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
                asistentes,
                compromisos
              }) => (
                <Tr key={id}>
                  <Td>{asunto}</Td>
                  <Td>{creador.nombres}</Td>
                  <Td>{responsable.nombres}</Td>
                  <Td>{orden_del_dia}</Td>
                  <Td>{asistentes.length > 0 ? asistentes?.map(i => `${i.nombres}, `) : "No hay asistentes"}</Td>
                  <Td>{compromisos.length}</Td>
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
