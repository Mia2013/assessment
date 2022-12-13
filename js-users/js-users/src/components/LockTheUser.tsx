import React from "react";
import {Box, Button, Alert} from "@mui/material";
import {LockOpen, Lock} from "@mui/icons-material";
import { LockTheUserProps } from "../types/types";
import { updateUser } from "../utils/utils";
import { UserContext } from "../context/userContext";
import { UserContextType } from "../types/types";

export default function LockTheUser({ user }: LockTheUserProps) {
  const [isLocked, setIsLocked] = React.useState<boolean>(
    user.status === "active" ? false : true
  );
  const [alert, setAlert] = React.useState<boolean>(false);
  const { getUsers } = React.useContext(
    UserContext
  ) as UserContextType;

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    try {
      setIsLocked(!isLocked);
      await updateUser(
        user.first_name,
        user.last_name,
        isLocked,
        Number(user.id)
      );
      setAlert(false);
      getUsers();
    } catch (error) {
      setAlert(true);
    }
  }

  return (
    <Box component="form" onSubmit={handleOnSubmit}>
      <Button type="submit">{isLocked ? <Lock /> : <LockOpen />}</Button>
      {alert && (
        <Alert severity="error">
          Something went wrong, please try again later
        </Alert>
      )}
    </Box>
  );
}
