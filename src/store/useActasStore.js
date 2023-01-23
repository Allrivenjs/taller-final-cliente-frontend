import { create } from 'zustand';

import { axiosClient } from '../lib';

const useActasStore = create((set, get) => ({
  actas: [],
  loading: false,
  actions: {
    toggleLoading: () => {
      set({ loading: !get().loading });
    },
    deleteActa: (actaId) => {
      const actas = get().actas;
      set({ actas: actas.filter(({ id }) => actaId !== id) });
    },
    addActa: (acta) => {
      const actas = get().actas;
      actas.push(acta);
      set({ actas: actas });
    },
    fetchActas: async () => {
      set({ loading: true });

      try {
        const res = await axiosClient.get('actas');
        set({ actas: res.data });

        console.log('res: ', res);
      } catch (e) {
        alert('Error al obtener actas del servidor');
        console.log('error on post acta: ', e);
      }

      set({ loading: false });
    },
  },
}));

export const useActas = () => useActasStore((store) => store.actas);
export const useLoading = () => useActasStore((store) => store.loading);
export const useActasActions = () => useActasStore((store) => store.actions);
