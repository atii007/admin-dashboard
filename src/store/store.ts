import { create, StoreApi, UseBoundStore } from "zustand";

interface StoreContextType {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  edit: boolean;
  setEdit: (value: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const useStoreContext: UseBoundStore<StoreApi<StoreContextType>> =
  create((set) => ({
    modalOpen: false,
    setModalOpen: (value: boolean) => set({ modalOpen: value }),

    edit: false,
    setEdit: (value: boolean) => set({ edit: value }),

    isCollapsed: false,
    setIsCollapsed: (value: boolean) => set({ isCollapsed: value }),
  }));
