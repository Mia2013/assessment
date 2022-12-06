import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import LockOpen from "@mui/icons-material/LockOpen";
import Lock from "@mui/icons-material/Lock";
import { LockTheUserProps } from "../types";
import { updateUser } from "./utils";

export default function LockTheUser({ user }: LockTheUserProps) {
  const [isLocked, setIsLocked] = React.useState<boolean>(
    user.status === "active" ? false : true
  );
  const [alert, setAlert] = React.useState<boolean>(false);

  async function handleOnSubmit(e: any) {
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
