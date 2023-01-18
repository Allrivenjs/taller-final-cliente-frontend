import { create } from 'zustand';
import { axiosClient } from '../lib';

export const useUserStore = create((set) => ({
  token: '',
  user: null,
  status: 'verifiying',
  setUser: (user) => {
    const localUser = JSON.stringify(user);
    localStorage.setItem('user', localUser);
    set({ user });
  },
  setToken: (token) => {
    localStorage.setItem('token', token);
    set({ token });
  },
  setStatus: (status) => set((state) => ({ status })),
  checkAuth: async (status) => {
    set({ status: 'verifiying' });

    const localUser = JSON.parse(localStorage.getItem('user'));

    console.log(localUser);

    try {
      const res = await axiosClient.get('actas');
      console.log(res);

      set({ status: 'logged' });
    } catch (e) {
      console.error('no hay sesión');
      set({ status: 'not-logged' });
    }
  },
}));
