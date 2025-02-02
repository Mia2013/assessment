export interface User {
  id: number;
  last_name: string;
  first_name: string;
  status: UserStatus;
  created_at: string;
  updated_at: string;
  url: string;
}

export type Users = User[] | undefined;

export type UserContextType = {
  users: Users;
  setUsers: (value: Users) => void;
  getUsers: () => void;
};

export enum UserStatus {
  Active = "active",
  Locked = "locked",
}

export enum Path {
  New = "new",
  Edit = "edit",
}

export type FormData = {
  firstName: string;
  lastName: string;
};

export type AlertType = {
  severity: SeverityStatus;
  message: string;
};

export enum SeverityStatus {
  Error = "error",
  Success = "success",
}

export type LockTheUserProps = {
  user: User;
};

export type ListProps = {
  users: Users;
  handleOnClick: (value: number) => void;
  page: number;
  usersPerPage: number;
};

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface InputFieldProps {
  error: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AddOrEditUserProps {
  formTitle: string;
  alertMessage: string;
  buttonTitle: string;
  AddOrEditUserFunction: (value: FormData, userId?: number) => Promise<void>;
  userId?: number | undefined;
  editAbleUser?: User;
}

export interface FormProps {
  formData: FormData;
  alert: string;
  handleOnSubmit: (value: React.SyntheticEvent) => void;
  title: string;
  buttonTitle: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editAbleUser?: User;
}
