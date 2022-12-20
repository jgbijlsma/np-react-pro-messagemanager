import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../types/UserType";

type UserContextType = {
  user: UserType | undefined;
  signIn: (user: UserType) => void;
  signOut: () => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

type UserProviderProps = {
  children: React.ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserType | undefined>(undefined);

  const navigate = useNavigate();

  function signIn(user: UserType) {
    setUser(user);
  }

  function signOut() {
    setUser(undefined);
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
}
