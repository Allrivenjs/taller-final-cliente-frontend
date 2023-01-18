import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosClient } from '../../lib';
import { useUserStore } from '../../store/useUserStore';

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: 'test@gmail.com',
      password: 'password',
    },
  });

  const [loading, setLoading] = useState(true);
  const setStatus = useUserStore((userStore) => userStore.setStatus);
  const setUser = useUserStore((userStore) => userStore.setUser);

  const onSubmit = handleSubmit(async ({ username, password }) => {
    setStatus('verifiying');
    setLoading(true);

    try {
      const res = await axiosClient.post('login', {
        username,
        password,
      });
      console.log('res: ', res);

      setUser(res.data.user);
      setStatus('logged');
    } catch (e) {
      alert('Error al iniciar sesión');
      console.log('error on login request: ', e);
      setStatus('not-logged');
    }
    setLoading(false);
  });

  return {
    loading,

    register,
    onSubmit,
  };
};
