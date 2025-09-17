import { User } from '@/types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AppState = {
      user: User | null;
      isLoading: boolean;
      setUser: (user:  User) => void;
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