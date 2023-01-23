import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  Divider,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DateInput } from '../../components/DateInput';
import { axiosClient } from '../../lib';
import { ActasTable } from '../components/ActasTable';

import { useListActas } from '../hooks/useListActas';

export const ListActas = () => {
  const { loading, actas, deleteActa, toggleLoading } = useListActas();

  const [searchValue, setSearchValue] = useState('');
  const [searchActas, setSearchActas] = useState([]);

  const [searchDate, setSearchDate] = useState({
    fecha_inicio: '',
    fecha_final: '',
  });

  const onCickSearch = async () => {
    const isANumber = !isNaN(Number(searchValue));
    toggleLoading();
    try {
      const res = await axiosClient.get(
        `/find-by-id-or-asunto-actas?asunto=${
          isANumber ? '' : searchValue
        }&id=${isANumber ? searchValue : ''}`
      );
      setSearchActas(Object.values(res.data.actas).map((acta) => acta));
    } catch (e) {
      console.log('Error trying to seach', e);
    }
    toggleLoading();
  };

  const onSearchByDate = async () => {
    toggleLoading();
    try {
      const res = await axiosClient.get(
        `/actas-by-date?fecha_inicio=${searchDate.fecha_inicio}&fecha_final=${searchDate.fecha_final}`
      );
      console.log(res.data);
      setSearchActas(Object.values(res.data.actas).map((acta) => acta));
    } catch (e) {
      console.log('Error trying to seach', e);
      toggleLoading();
    }
    toggleLoading();
  };

  useEffect(() => {
    if (searchValue.length < 1) {
      setSearchActas(actas);
    }
  }, [searchValue]);

  useEffect(() => {
    setSearchActas(actas);
  }, [actas]);

  const onChangeDateInput = (value, key) => {
    setSearchDate({
      ...searchDate,
      [key]: value,
    });
  };


  return (
    <Box>
      <HStack alignItems='center' justifyContent='space-between' mb={4}>
        <Heading size='lg'>Lista de actas</Heading>
        <Button colorScheme='blue' as={Link} to='/actas/create'>
          Crear acta
        </Button>
      </HStack>
      <Divider />

      <InputGroup size='md' my={4}>
        <Input
          pr='4.5rem'
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type='text'
          placeholder='Buscar por asunto o id de acta'
        />
        <InputRightElement width='4.5rem' pr={1}>
          <Button h='1.75rem' size='sm' onClick={onCickSearch}>
            Buscar
          </Button>
        </InputRightElement>
      </InputGroup>

      <Divider mb={4} />

      <HStack>
        <DateInput
          type='date'
          name='fecha_inicio'
          label='Fecha inicial'
          onChange={(value) => onChangeDateInput(value, 'fecha_inicio')}
        />
        <DateInput
          type='date'
          name='fecha_final'
          label='Fecha final'
          onChange={(value) => onChangeDateInput(value, 'fecha_final')}
        />
        <IconButton onClick={onSearchByDate} icon={<SearchIcon />} />
      </HStack>

      <Divider my={4} />

      {loading ? (
        <Card p={4} justifyContent='center' alignItems='center'>
          <Spinner />
        </Card>
      ) : (
        <ActasTable actas={searchActas} deleteActas={deleteActa} />
      )}
    </Box>
  );
};
