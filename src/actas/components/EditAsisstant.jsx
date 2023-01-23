import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  Divider,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { Fragment } from 'react';

import { UsersSelect } from '../../components';

import { useEditAssistant } from '../hooks';

export const EditAssistant = ({ acta }) => {
  const { assistants, popAssistant, pushAssistant, onSubmit, editAnAssistant } =
    useEditAssistant();

  return (
    <Card p={4}>
      <Heading size='md'>Asistentes del acta</Heading>
      <Divider my={4} />

      <HStack justifyContent='space-between'>
        <Heading size='sm'>Asistentes</Heading>
        <HStack>
          <IconButton size='xs' icon={<AddIcon />} onClick={pushAssistant} />
          <IconButton
            colorScheme='red'
            size='xs'
            icon={<DeleteIcon />}
            onClick={popAssistant}
          />
        </HStack>
      </HStack>

      {assistants.map((assistant, index) => (
        <Fragment key={index}>
          <Box mt={2} />
          <UsersSelect
            onChange={(value) => {
              editAnAssistant(index, value);
            }}
            label='Asistentes del acta'
            placeholder='Selecciona un usuario'
          />
        </Fragment>
      ))}

      <Button mt={6} colorScheme='blue' onClick={onSubmit}>
        Enviar
      </Button>
    </Card>
  );
};
