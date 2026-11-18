
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAppStore = create(
    persist((set) => ({
  theme: "light",

  setTheme: (theme) => set({ theme})
}),{
    name:'theme-store',
    storage:createJSONStorage(()=>localStorage)
}
)
);