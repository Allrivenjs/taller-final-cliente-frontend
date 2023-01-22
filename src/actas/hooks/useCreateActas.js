import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { axiosClient } from '../../lib';

import { useUser } from '../../store';

export const useCreateActas = (isEdit) => {
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

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [loading, setLoading] = useState(false);

  const currentUser = useUser();

  const onCreate = async (acta) => {
    setLoading(true);

    console.log({ ...acta });

    try {
      const res = await axiosClient.post('actas', {
        ...acta,
      });
      navigate('/actas');

      console.log('res: ', res.data);
    } catch (e) {
      alert('Error al crear el acta');
      console.log('error on post acta: ', e);
    }
    setLoading(false);
  };

  const onEdit = async (acta) => {
    setLoading(true);

    console.log({ ...acta });

    try {
      const res = await axiosClient.post(`actas/`, {
        ...acta,
      });
      navigate('/actas');

      console.log('res: ', res.data);
    } catch (e) {
      alert('Error al crear el acta');
      console.log('error on post acta: ', e);
    }
    setLoading(false);
  }

  const onSubmit = handleSubmit(isEdit ? onEdit : onCreate);

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
