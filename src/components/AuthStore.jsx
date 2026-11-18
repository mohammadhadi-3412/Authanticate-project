
// import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";

// export const useAuthpStore = create(
//     persist((set) => ({

//   isLogin : false,
//   token : null ,

//   islogin: ({isLogin , token}) => set({ isLogin, token})
// }),{
//     name:'auth-store',
//     storage:createJSONStorage(()=>localStorage)
// }
// )
// );



import { create } from "zustand";

import {
  persist,
  createJSONStorage
} from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isLogin: false,
      token: null,

      login: (token) => set({
        isLogin: true,
        token : 12345
      }),

      logout: () => set({
        isLogin: false,
        token: null
      })
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage)
    }
  )
);