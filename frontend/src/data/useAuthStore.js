import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  checkAuth: async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`, { withCredentials: true });
      set({ user: res.data.user, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },

  logout: async () => {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {}, { withCredentials: true });
    set({ user: null });
  },
}));

export default useAuthStore;
