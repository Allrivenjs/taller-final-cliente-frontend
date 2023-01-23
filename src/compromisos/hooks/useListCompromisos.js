import { useEffect, useState } from 'react';
import { axiosClient } from '../../lib';

export const useListCompromisos = () => {
  const [loading, setLoading] = useState(false);
  const [actasWithCompromisos, setActasWithCompromisos] = useState([]);

  const fetchCompromisos = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get(`compromisos-pendientes`);
      console.log(res.data.actas);

      setActasWithCompromisos(Object.values(res.data.actas).map((acta) => acta));
    } catch (e) {
      console.log('Error fetching compromisos', e);
    };
    setLoading(false);
  };

  useEffect(() => {
    fetchCompromisos();
  }, []);

  return {
    loading,
    actasWithCompromisos,
    setLoading,
  };
};
