import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { axiosClient } from '../../lib';

import { useActas, useUser } from '../../store';

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

  const [loading, setLoading] = useState(false);

  const actas = useActas();
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
      const res = await axiosClient.post(`actas/update/${id}`, {
        ...acta,
      });
      navigate('/actas');

      console.log('res: ', res.data);
    } catch (e) {
      alert('Error al editar el acta');
      console.log('error on put acta: ', e);
    };

    setLoading(false);
  }

  const onSubmit = handleSubmit(isEdit ? onEdit : onCreate);

  useEffect(() => {
    if (actas.length > 0 && isEdit) {
      const acta = actas.find((actualActa) => actualActa.id === Number(id));
      setValue('asunto', acta.asunto);
      setValue('creador_id', acta.creador_id);
      setValue('hora_final', acta.hora_final);
      setValue('hora_inicio', acta.hora_inicio);
      setValue('orden_del_dia', acta.orden_del_dia);
      setValue('responsable_id', acta.responsable_id);
      setValue('fecha_creacion', acta.fecha_creacion);
      setValue('descripcion_hechos', acta.descripcion_hechos);
    };
  }, [actas]);

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
