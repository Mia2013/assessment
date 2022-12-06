import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Alert,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import PaginationRounded from "../components/PaginationRounded";
import { HomeProps, UserStatus } from "../types";
import { getData } from "../components/utils";
import LockTheUser from "../components/LockTheUser";

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
  console.log(users);



  
  return (
    <Grid container>
      {!alert ? (
        <Grid container item xs={12} sx={{ my: 5 }}>
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
                        sx={{ color: "#FF177A" }}
                      >
                        Edit
                      </Button>
                      <LockTheUser  user={user}/>
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
