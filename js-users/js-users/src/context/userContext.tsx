import * as React from "react";
import {
  UserProviderProps,
  UserContextType,
  Users,
  UserStatus,
} from "../types/types";

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = React.useState<Users>();



  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
