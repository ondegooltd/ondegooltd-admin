import React from "react";
// import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserState } from "../store/store";

export default function UserRoutes({ path, component: Component, ...rest }) {
  const isLoggedIn = useUserState((state) => state.isLoggedIn);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={(path = window.location.pathname)} />
  );
}
