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
  Textarea,
} from '@chakra-ui/react';

import { Controller } from 'react-hook-form';

import { UsersSelect } from '../../components';

import { useCreateActas } from '../hooks';
import { DateInput } from '../../components/DateInput';

export const CreateActas = () => {
  const { loading, register, control, onSubmit } = useCreateActas();

  return (
    <Box>
      <HStack alignItems='center' justifyContent='space-between' mb={4}>
        <Heading size='lg'>Crear actas</Heading>
        <Button colorScheme='blue' as={Link} to='/actas'>
          Lista de actas
        </Button>
      </HStack>
      <Divider />

      <Container>
        <Card mt={4} p={4}>
          <Heading size='md'>Ingresa los datos del acta</Heading>
          <Divider my={4} />

          <form>
            <FormControl my={4}>
              <FormLabel>Asunto</FormLabel>
              <Input {...register('asunto')} type='text' />
              <FormHelperText>El asunto de la acta</FormHelperText>
            </FormControl>

            <FormControl my={4}>
              <FormLabel>Orden del día</FormLabel>
              <Input {...register('orden_del_dia')} type='text' />
              <FormHelperText>Ingrese el orden del día</FormHelperText>
            </FormControl>

            <Controller
              control={control}
              name='responsable_id'
              render={({ field: { onChange } }) => (
                <UsersSelect
                  onChange={onChange}
                  label='Responsable del acta'
                  placeholder='Selecciona un usuario'
                />
              )}
            />

            <Box mt={4}/>

            <Controller
              control={control}
              name='hora_inicio'
              render={({ field: { onChange } }) => (
                <DateInput
                  onChange={onChange}
                  label='Fecha de inicio'
                  placeholder='Selecciona una fecha'
                />
              )}
            />

            <Box mt={4}/>

            <Controller
              control={control}
              name='hora_final'
              render={({ field: { onChange } }) => (
                <DateInput
                  onChange={onChange}
                  label='Fecha final'
                  placeholder='Selecciona una fecha'
                />
              )}
            />

            <FormControl mt={4}>
              <FormLabel>Descripción de los hechos</FormLabel>
              <Textarea
                {...register('descripcion_hechos')}
                placeholder='descripción de los hechos'
              />
              <FormHelperText>Describe los hechos con detalle</FormHelperText>
            </FormControl>
          </form>

          <Button colorScheme='blue' onClick={onSubmit} mt={6} isLoading={loading}>
            Enviar
          </Button>
        </Card>
      </Container>
    </Box>
  );
};
