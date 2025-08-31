import { create } from 'zustand';

interface ToasterState {
  isOpen: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
  openToaster: (message: string, type?: 'success' | 'error' | 'info') => void;
  closeToaster: () => void;
}

export const useToasterStore = create<ToasterState>((set) => ({
  isOpen: false,
  message: '',
  type: 'info',
  openToaster: (message, type = 'info') => set({ isOpen: true, message, type }),
  closeToaster: () => set({ isOpen: false }),
}));
