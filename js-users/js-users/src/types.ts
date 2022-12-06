export interface User {
  id: number;
  last_name: string;
  first_name: string;
  status: UserStatus;
  created_at: string;
  updated_at: string;
  url: string;
}

export type Users = User[];

export type HomeProps = {
  users: Users;
  setUsers: (value: Users) => void;
};

export enum UserStatus {
  Active = "active",
  Locked = "locked",
}

export type FormData = {
  firstName: string;
  lastName: string;
};

export type AlertType = {
  severity: SeverityStatus;
  display: boolean;
  message: string;
};

export enum SeverityStatus {
  Error = "error",
  Success = "success",
}

export type FieldsError = {
  firstName: boolean;
  lastName: boolean;
};

export type LockTheUserProps = {
  user: User;
};

export type ListProps = {
  users: Users;
  handleOnClick: (value: number) => void;
  page: number;
  usersPerPage: number;
};
