import { create } from 'zustand';
import { axiosClient } from '../lib';

const useUsersStore = create((set, get) => ({
  users: [],
  loading: false,
  actions: {
    setUser: (users) => {
      set({ users });
    },
    filterUsers: (userId) => {
      const users = get().users;
      set({ users: users.filter((user) => user.id !== userId) });
    },
    fetchUsers: async (status) => {
      set({ loading: true });

      try {
        const res = await axiosClient.get('usuarios');
        if (res.data.length > 0) {
          set({ users: res.data });
        }
      } catch (e) {
        console.error('error fetching users');
      }

      set({ loading: false });
    },
  },
}));

export const useUsers = () => useUsersStore((store) => store.users);
export const useLoadingUsers = () => useUsersStore((store) => store.loading);
export const useUsersActions = () => useUsersStore((store) => store.actions);
