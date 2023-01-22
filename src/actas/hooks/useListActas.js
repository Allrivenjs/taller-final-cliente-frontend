import { useEffect, useState } from 'react';

import { axiosClient } from '../../lib';

export const useListActas = () => {
  const [loading, setLoading] = useState(true);
  const [actas, setActas] = useState([]);

  const fetchActas = async () => {
    setLoading(true);

    try {
      const res = await axiosClient.get('actas');
      console.log({...res.data});

      setActas(res.data)

      console.log('res: ', res);
    } catch (e) {
      alert('Error al obtener actas del servidor');
      console.log('error on post acta: ', e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchActas();
  }, []);

  return {
    loading,
    actas,
    setActas,
  };
};
