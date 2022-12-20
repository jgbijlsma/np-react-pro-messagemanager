import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <UserProvider>{children}</UserProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
