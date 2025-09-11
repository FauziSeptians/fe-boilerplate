import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
      user: any | null;
      isLoading: boolean;
      setUser: (user: any) => void;
      setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>()(
      persist(
            (set) => ({
                  user: null,
                  isLoading: false,
                  setUser: (user) => set({ user }),
                  setLoading: (isLoading) => set({ isLoading }),
            }),
            { name: 'app-storage' }
      )
);