import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { axiosClient } from '../../lib';

export const useEditCompromiso = (isEdit) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      responsable_id: 0,
      descripcion: '',
      fecha_inicio: '',
      fecha_final: '',
    },
  });

  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (compromiso) => {
    setLoading(true);

    console.log({ ...compromiso });

    try {
      const res = await axiosClient.post('actas/make-compromisos', {
        acta_id: id,
        datos: [{
          ...compromiso,
        }]
      });

      console.log('res: ', res.data);
    } catch (e) {
      alert('Error al crear compromiso');
      console.log('error on post compromiso: ', e);
    }
    setLoading(false);
  });

  return {
    loading,
    control,
    register,
    onSubmit,
  };
};
