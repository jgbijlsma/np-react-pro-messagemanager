import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>{children}</UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
