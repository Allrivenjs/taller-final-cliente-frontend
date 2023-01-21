import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { axiosClient } from '../../lib';

import { useUser } from '../../store';

export const useCreateActas = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      creador_id: 0,
      responsable_id: 0,
      orden_del_dia: '',
      asunto: 'test asunto',
      fecha_creacion: new Date().toISOString(),
      hora_inicio: '',
      hora_final: '',
      descripcion_hechos: 'test descripcion',
    },
  });

  const [loading, setLoading] = useState(false);

  const currentUser = useUser();

  const onSubmit = handleSubmit(async (acta) => {
    setLoading(true);

    console.log({ ...acta });

    try {
      const res = await axiosClient.post('actas', {
        ...acta,
      });
      console.log('res: ', res.data);
    } catch (e) {
      alert('Error al crear el acta');
      console.log('error on post acta: ', e);
    }
    setLoading(false);
  });

  useEffect(() => {
    setValue('creador_id', currentUser.id);
  }, [currentUser]);

  return {
    loading,
    control,
    register,
    onSubmit,
  };
};
