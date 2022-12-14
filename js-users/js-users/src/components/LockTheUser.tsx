import React, { useEffect } from "react";
import { Box, Button, Alert } from "@mui/material";
import { LockOpen, Lock } from "@mui/icons-material";
import { LockTheUserProps } from "../types/types";
import { updateUser } from "../utils/utils";
import { UserContext } from "../context/userContext";
import { UserContextType } from "../types/types";
import styles from "../style/styles";

export default function LockTheUser({ user }: LockTheUserProps) {
  const [isLocked, setIsLocked] = React.useState<boolean>(
    user.status === "active" ? false : true
  );
  const [alert, setAlert] = React.useState<boolean>(false);
  const { getUsers } = React.useContext(UserContext) as UserContextType;

  useEffect(() => {
    getUsers();
  }, [isLocked]);

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
    } catch (error) {
      setAlert(true);
    }
  }

  return (
    <Box component="form" onSubmit={handleOnSubmit} sx={styles.lockTheUserBox}>
      <Button type="submit" sx={styles.reverseLockButtonHover}>
        {isLocked ? <Lock /> : <LockOpen />}
      </Button>
      {alert && <Alert severity="error">Error </Alert>}
    </Box>
  );
}
