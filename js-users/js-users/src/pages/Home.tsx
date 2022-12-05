import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Alert,
} from "@mui/material";

import PaginationRounded from "../components/PaginationRounded";
import { HomeProps, Users } from "../types";
import { getData } from "../components/utils";

export default function Home({ users, setUsers }: HomeProps) {
  const [page, setPage] = useState<number>(1);
  const [alert, setAlert] = useState<string>("");

  const usersPerPage = 10;
  const paginationCount = Math.ceil(users.length / usersPerPage);

  async function getUsers() {
    try {
      const result = await getData();
      setUsers([...result]);
      setAlert("");
    } catch (error) {
      setAlert("Sorry, but something went wrong, please try again later");
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Grid container>
      {!alert ? (
        <Grid container item xs={12} sx={{ my: 10 }}>
          <List
            sx={{
              textAlign: "center",
              mx: "auto",
              width: "100%",
              maxWidth: { xs: "300px", md: "450px" },
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            {users
              .slice((page - 1) * usersPerPage, page * usersPerPage)
              .map((user, index) => {
                return (
                  <Grid item xs={12} key={user.id}>
                    <ListItem>
                      <ListItemText
                        primary={`${user.first_name} ${user.last_name} `}
                        secondary={user.created_at}
                      />
                    </ListItem>
                    <Divider component="li" />
                  </Grid>
                );
              })}
          </List>
          <Grid item xs={12}>
            <PaginationRounded
              paginationCount={paginationCount}
              setPage={setPage}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          sx={{ mt: 15, maxWidth: { xs: "300px", md: "450px" }, mx: "auto" }}
        >
          <Alert severity="error"> {alert}</Alert>
        </Grid>
      )}
    </Grid>
  );
}
