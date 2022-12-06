import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Alert,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import PaginationRounded from "../components/PaginationRounded";
import { HomeProps } from "../types";
import { getData } from "../components/utils";

export default function Home({ users, setUsers }: HomeProps) {
  const [page, setPage] = useState<number>(1);
  const [alert, setAlert] = useState<string>("");
  const navigate = useNavigate();

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

  const handleOnClick = (id: number) => {
    navigate(`/edit/${id}`);
  };
  const handleOnClickAddNewUser = () => {
    navigate("/new");
  };

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
              .map((user) => {
                return (
                  <Grid item xs={12} key={user.id}>
                    <ListItem>
                      <ListItemText
                        primary={`${user.first_name} ${user.last_name} `}
                        secondary={user.created_at}
                      />
                      <Button onClick={() => handleOnClick(user.id)}>
                        Edit
                      </Button>
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
          <Grid
            item
            xs={12}
            sx={{
              my: 3,
              textAlign: "center",
              mx: "auto",
              width: "100%",
              maxWidth: { xs: "300px", md: "450px" },
              backgroundColor: "#FF177A",
            }}
          >
            <Button
              onClick={() => handleOnClickAddNewUser()}
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "#FF177A",
              }}
            >
              Add new User
            </Button>
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
