import { create } from 'zustand';
import { axiosClient } from '../lib';

export const useUserStore = create((set) => ({
  user: null,
  status: 'verifiying',
  setUser: (user) => set((state) => ({ user })),
  setStatus: (status) => set((state) => ({ status })),
  checkAuth: async (status) => {
    set({status: 'verifiying'});

    const localUser = localStorage.getItem('user');

    try {
      const res = await axiosClient.post('login', {
        username: localUser.username,
        password: localUser.password,
      });
      console.log(res);

      set({status: 'logged'});
    } catch (e) {
      console.error('error login');
      set({status: 'not-logged'});
    };
  },
}));
