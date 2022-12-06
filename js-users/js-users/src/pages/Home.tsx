import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Alert, Button } from "@mui/material";
import PaginationRounded from "../components/PaginationRounded";
import { UserContextType } from "../types/types";
import { getData } from "../utils/utils";
import UserList from "../components/UserList";

import { UserContext } from "../context/userContext";

export default function Home() {
  const { users, setUsers } = React.useContext(UserContext) as UserContextType;

  const [page, setPage] = React.useState<number>(1);
  const [alert, setAlert] = React.useState<string>("");
  const navigate = useNavigate();

  const usersPerPage = 10;
  const paginationCount = Math.ceil(users ? users.length / usersPerPage : 0);

  async function getUsers() {
    try {
      const result = await getData();
      setUsers([...result]);
      setAlert("");
    } catch (error) {
      setAlert("Sorry, but something went wrong, please try again later");
    }
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  const handleOnClickNavigate = (userId?: number): void => {
    if (userId) {
      navigate(`/edit/${userId}`);
    } else {
      navigate("/new");
    }
  };

  return (
    <Grid container>
      {!alert ? (
        <Grid container item xs={12} sx={{ my: 5 }}>
          <Grid item xs={12}>
            <UserList
              users={users}
              handleOnClick={handleOnClickNavigate}
              page={page}
              usersPerPage={usersPerPage}
            />
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
              onClick={() => handleOnClickNavigate()}
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
