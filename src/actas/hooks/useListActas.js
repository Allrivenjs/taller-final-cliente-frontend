import { useEffect } from 'react';

import {
  useActas,
  useActasActions,
  useLoading,
} from '../../store/useActasStore';

export const useListActas = () => {
  const loading = useLoading();
  const actas = useActas();
  const { fetchActas, addActa, deleteActa, toggleLoading } = useActasActions();

  useEffect(() => {
    fetchActas();
  }, []);

  return {
    loading,
    actas,
    addActa,
    deleteActa,
    toggleLoading,
  };
};
