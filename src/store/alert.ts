import { create } from 'zustand';

type Alert = {
  message: string;
  title: string;
  type: string;
};

type State = {
  alert: Alert;
  showAlert: (alert: Alert) => void;
  resetAlert: () => void;
};

const initAlert = {
  message: '',
  title: '',
  type: '',
};

export const useStoreAlert = create<State>((set) => ({
  alert: initAlert,
  showAlert: (alert) => set(() => ({ alert: alert })),
  resetAlert: () => set(() => ({ alert: initAlert })),
}));
