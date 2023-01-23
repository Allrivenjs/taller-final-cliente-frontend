import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';

import { useViewActa } from '../hooks';
import { EditAssistant } from '../components/EditAsisstant';
import { EditCompromiso } from '../components/EditCompromiso';

export const ViewActa = () => {
  const { acta, loading } = useViewActa();

  console.log(acta);

  if (loading) {
    return <>loading</>;
  }

  return (
    <Box>
      <HStack alignItems='center' justifyContent='space-between' mb={4}>
        <Heading size='lg'>Actas</Heading>
      </HStack>
      <Divider />

      <Container>
        <Stack>
          <Card mt={4} p={4}>
            <HStack justifyContent='space-between'>
              <Heading size='md'>Acta con id {acta.id}</Heading>
              <Button
                size='sm'
                as={Link}
                to={`/actas/edit/${acta.id}`}
              >
                Editar actas
              </Button>
            </HStack>
            <Divider my={4} />

            <form>
              <FormControl my={4}>
                <FormLabel>Asunto</FormLabel>
                <Input disabled value={acta.asunto} type='text' />
                <FormHelperText>El asunto de la acta</FormHelperText>
              </FormControl>

              <FormControl my={4}>
                <FormLabel>Orden del día</FormLabel>
                <Input disabled value={acta.orden_del_dia} type='text' />
                <FormHelperText>Ingrese el orden del día</FormHelperText>
              </FormControl>

              <FormControl my={4}>
                <FormLabel>Responsable</FormLabel>
                <Input disabled value={acta.responsable.nombres} type='text' />
                <FormHelperText>Ingrese el orden del día</FormHelperText>
              </FormControl>

              <FormControl my={4}>
                <FormLabel>Hora de inicio</FormLabel>
                <Input disabled value={acta.hora_inicio} type='text' />
                <FormHelperText>Ingrese el orden del día</FormHelperText>
              </FormControl>

              <FormControl my={4}>
                <FormLabel>Hora final</FormLabel>
                <Input disabled value={acta.hora_final} type='text' />
                <FormHelperText>Ingrese el orden del día</FormHelperText>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Descripción de los hechos</FormLabel>
                <Textarea
                  disabled
                  value={acta.descripcion_hechos}
                  placeholder='descripción de los hechos'
                />
                <FormHelperText>Describe los hechos con detalle</FormHelperText>
              </FormControl>
            </form>
          </Card>

          <EditAssistant acta={acta} />

          <EditCompromiso acta={acta} />
          

        </Stack>
      </Container>
    </Box>
  );
};
