import { create } from "zustand";
import axios from "axios";


const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,
  backendUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',

  checkAuth: async () => {
    set({ loading: true, error: null });
    const token = localStorage.getItem("token");
    console.log("Checking auth with token:", token);
    if (!token) {
      set({ user: null, loading: false });
      return;
    }
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/auth/checkSession`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Auth check response:", response.data);
      set({ user: response.data.user, loading: false });
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("token");
      set({ user: null, loading: false, error: "Session expired. Please log in again." });
    }
  },

  logout: async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/auth/logout`, {}, {
        withCredentials: true,
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
    localStorage.removeItem("token");
    set({ user: null });
  },
}));

export default useAuthStore;
