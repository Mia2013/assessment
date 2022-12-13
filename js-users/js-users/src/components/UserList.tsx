import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { ListProps, UserStatus } from "../types/types";
import LockTheUser from "./LockTheUser";
import styles from "../style/styles";

export default function UserList({
  users,
  handleOnClick,
  page,
  usersPerPage,
}: ListProps) {
  return (
    <List sx={[styles.pageItems, styles.listBackground]}>
      {users
        ? users
            .sort((a, b) => a.id - b.id)
            .slice((page - 1) * usersPerPage, page * usersPerPage)
            .map((user) => {
              return (
                <Grid item xs={12} key={user.id}>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            textDecoration:
                              user.status === UserStatus.Active
                                ? "none"
                                : "line-through",
                          }}
                        >
                          {user.first_name} {user.last_name}
                        </Typography>
                      }
                      secondary={user.created_at}
                    />
                    <Button
                      onClick={() => handleOnClick(user.id)}
                      sx={[styles.mainColor, styles.reverseButtonHover]}
                    >
                      Edit
                    </Button>
                    <LockTheUser user={user} />
                  </ListItem>
                  <Divider component="li" />
                </Grid>
              );
            })
        : ""}
    </List>
  );
}
