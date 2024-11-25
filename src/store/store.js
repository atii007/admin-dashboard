import { create } from "zustand";

export const useStoreContext = create((set) => ({
  modalOpen: false,
  setModalOpen: (value) => set({ modalOpen: value }),

  data: [],
  setData: (data) => set({ data: data }),

  edit: false,
  setEdit: (value) => set({ edit: value }),
}));
