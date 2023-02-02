import { useEffect, useState } from 'react';

import {
  FormControl,
  FormLabel,
  HStack,
  Select,
  Spinner,
} from '@chakra-ui/react';

import { useLoadingUsers, useUser, useUsers, useUsersActions } from '../store/';

export const UsersSelect = ({
  label,
  placeholder,
  onChange,
  defaultValue,
  disabled = false,
}) => {
  const loading = useLoadingUsers();
  const users = useUsers();
  const { fetchUsers } = useUsersActions();

  useEffect(() => {
    if (!users.length > 0) {
      fetchUsers();
    }
  }, []);

  const onChangeInput = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <FormControl>
      <HStack alignItems='center' justifyContent='space-between' mb={2}>
        <FormLabel mb={0}>{label}</FormLabel>
        {loading && <Spinner size='xs' />}
      </HStack>
      <Select
        defaultValue={
          defaultValue ? defaultValue : users.length > 0 ? users[0].id : 0
        }
        placeholder={placeholder}
        disabled={disabled ? disabled : loading}
        onChange={onChangeInput}
      >
        {users.map(({ nombres, apellidos, id }) => (
          <option value={id} key={id}>
            {nombres} {apellidos}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
