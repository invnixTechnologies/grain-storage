import { create } from "zustand";

const useAuthStore = create((set) => ({
  phoneNumber: "",
  setPhoneNumber: (number) => set({ phoneNumber: number }),
}));

export default useAuthStore;
