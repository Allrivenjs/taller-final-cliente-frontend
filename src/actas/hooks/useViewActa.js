import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { axiosClient } from '../../lib';

export const useViewActa = () => {
  const [acta, setActa] = useState();

  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchActa = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get(`actas/${id}`);
      setActa(res.data);

      console.log('res: ', res);
    } catch (e) {
      alert('Error al obtener actas del servidor');
      console.log('error on post acta: ', e);
      navigate(`/actas`);
    };
    setLoading(false);
  };

  useEffect(() => {
    fetchActa();
  }, []);

  return {
    loading,
    acta,
  };
};
