import { useEffect, useState } from 'react';

import {
  FormControl,
  FormLabel,
  HStack,
  Select,
  Spinner,
} from '@chakra-ui/react';

import { axiosClient } from '../lib';
import { useUser } from '../store';

export const UsersSelect = ({ label, placeholder, onChange }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const currentUser = useUser();

  const fetchUsers = async () => {
    setLoading(true);
    const res = await axiosClient.get('usuarios');
    if (res.data.length > 0) {
      setUsers(res.data.filter((user) => user.id !== currentUser.id));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
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
        defaultValue={users.length > 0 ? users[0].id : 0}
        placeholder={placeholder}
        disabled={loading}
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
