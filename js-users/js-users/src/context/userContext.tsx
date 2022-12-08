import * as React from "react";
import {
  UserProviderProps,
  UserContextType,
  Users,
  UserStatus,
} from "../types/types";
import { getData } from "../utils/utils";

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = React.useState<Users>();

  async function getUsers() {
    const result = await getData();
    setUsers([...result]);
  }

  return (
    <UserContext.Provider value={{ users, setUsers, getUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
