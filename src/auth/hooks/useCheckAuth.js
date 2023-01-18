import { useEffect } from 'react';
import { useUserStore } from '../../store/useUserStore';

export const useCheckAuth = () => {

  const status = useUserStore(userStore => userStore.status);
  const checkAuth = useUserStore(userStore => userStore.checkAuth);

  useEffect(() => {
    console.log(status);
    checkAuth();
  }, []);

  return {
    status,
  };
};
