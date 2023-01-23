import { useEffect, useState } from 'react';
import { axiosClient } from '../../lib';

export const useListCompromisos = () => {
  const [loading, setLoading] = useState();
  const [compromisos, setCompromisos] = useState();

  const fetchCompromisos = async () => {
    try {
      const res = await axiosClient.get(`compromisos-pendientes`);
      console.log(res.data);
    } catch (e) {
      console.log('Error fetching compromisos', e);
    };
  };

  useEffect(() => {
    fetchCompromisos();
  }, []);

  return {
    loading,
    compromisos,
    setLoading,
  };
};
