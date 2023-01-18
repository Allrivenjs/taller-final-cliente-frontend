import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosClient } from '../../lib';
import { useUserStore } from '../../store/useUserStore';

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombres: 'William Jesus',
      apellidos: 'Sanchez Gomez',
      username: 'test@gmail.com',
      password: 'password',
    },
  });

  const [loading, setLoading] = useState(true);
  const setStatus = useUserStore((userStore) => userStore.setStatus);
  const setUser = useUserStore((userStore) => userStore.setUser);
  const setToken = useUserStore((userStore) => userStore.setToken);

  const onSubmit = handleSubmit(
    async ({ nombres, apellidos, username, password }) => {
      setStatus('verifiying');
      setLoading(true);

      try {
        console.log({ nombres, apellidos, username, password });
        const res = await axiosClient.post('signout', {
          nombres,
          apellidos,
          username,
          password,
        });
        console.log('res: ', res.data);

        setUser(res.data.user);
        setToken(res.data.token);

        setStatus('logged');
      } catch (e) {
        alert('Error al iniciar sesión');
        console.log('error on login request: ', e);

        setUser(res.data.user);
        setToken(res.data.token);

        setStatus('not-logged');
      }
      setLoading(false);
    }
  );

  return {
    loading,

    register,
    onSubmit,
  };
};
