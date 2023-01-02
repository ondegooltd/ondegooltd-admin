import create from "zustand";
import { persist } from "zustand/middleware";

const userState = persist(
    (set) => ({
        user: null,
        isLoggedIn: false,
        token: null,
        refreshToken: null,
        setUser: (user) => {
            set(() => ({ user, isLoggedIn: true }));
        },
        setToken: (token) => {
            set(() => ({ token }));
        },
        setRefreshToken: (refreshToken) => {
            set(() => ({ refreshToken }));
        },
        removeToken: () => set({ token: null }),
        logOut: () => set({ user: null, token: null, refreshToken: null, isLoggedIn: false }),
    }),
    { name: "user-setting" }
);

export const useUserState = create(userState);