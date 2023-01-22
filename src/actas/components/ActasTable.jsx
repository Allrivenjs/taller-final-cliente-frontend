import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
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
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../../lib';

export const ActasTable = ({ actas = [], setActas, }) => {
  const navigate = useNavigate();
  const onDeleteActa = async (actaToDeleteId) => {
    try {
      const res = await axiosClient.post(`actas/delete/${actaToDeleteId}`);
      setActas(actas.filter(({id}) => id !== actaToDeleteId));
    } catch (e) {
      alert('Error trying to delete acta');
      console.log('Error trying to delete acta');
    };
  };

  const onEditActa = async (id) => {
    navigate(`/actas/edit/${id}`);
  };

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
