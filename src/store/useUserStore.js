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

    try {
      await axiosClient.get('actas');
      set({ user: localUser, status: 'logged' });
    } catch (e) {
      console.error('no hay sesión');
      set({ status: 'not-logged' });
    }
  },
}));

export const useUser = () => useUserStore((store) => store.user);
