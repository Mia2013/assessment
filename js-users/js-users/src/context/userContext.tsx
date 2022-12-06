import * as React from "react";
import {
  UserProviderProps,
  UserContextType,
  Users,
  UserStatus,
} from "../types";

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = React.useState<Users>([
    {
      id: -5000,
      last_name: "",
      first_name: "",
      status: UserStatus.Active,
      created_at: "",
      updated_at: "",
      url: "",
    },
  ]);



  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
