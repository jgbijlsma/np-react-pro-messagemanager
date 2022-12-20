import React from "react";
import NavBar from "./NavBar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
