import React from "react";
import AddOrEditUser from "../components/AddOrEditUser";
import { addUser } from "../utils/utils";

export default function AddNewUser() {
  return (
    <AddOrEditUser
      formTitle="Add new user"
      alertMessage="User added successfully"
      buttonTitle="Send"
      AddOrEditUserFunction={addUser}
    />
  );
}
