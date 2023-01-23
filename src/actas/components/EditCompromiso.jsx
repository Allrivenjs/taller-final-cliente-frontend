import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Textarea,
} from '@chakra-ui/react';

import { Fragment } from 'react';
import { Controller } from 'react-hook-form';

import { UsersSelect } from '../../components';
import { DateInput } from '../../components/DateInput';

import { useEditCompromiso } from '../hooks';

export const EditCompromiso = () => {
  const { register, control, loading, onSubmit } = useEditCompromiso();

  return (
    <Card p={4}>
      <Heading size='md'>Compromiso del acta</Heading>
      <Divider my={4} />

      <form>
        <Controller
          control={control}
          name='responsable_id'
          render={({ field: { onChange } }) => (
            <UsersSelect
              onChange={onChange}
              label='Responsable'
              placeholder='Selecciona un usuario'
            />
          )}
        />

        <Box mt={4} />

        <Controller
          control={control}
          name='fecha_inicio'
          render={({ field: { onChange } }) => (
            <DateInput
              onChange={onChange}
              label='Fecha de inicio'
              placeholder='Selecciona una fecha'
            />
          )}
        />

        <Box mt={4} />

        <Controller
          control={control}
          name='fecha_final'
          render={({ field: { onChange } }) => (
            <DateInput
              onChange={onChange}
              label='Fecha final'
              placeholder='Selecciona una fecha'
            />
          )}
        />

        <FormControl mt={4}>
          <FormLabel>Descripción del compromiso</FormLabel>
          <Textarea
            {...register('descripcion')}
            placeholder='descripción del compromiso'
          />
          <FormHelperText>Describe los hechos con detalle</FormHelperText>
        </FormControl>
      </form>

      <Button mt={6} colorScheme='blue' onClick={onSubmit} isLoading={loading}>
        Enviar
      </Button>
    </Card>
  );
};
