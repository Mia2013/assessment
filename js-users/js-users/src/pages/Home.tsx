import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Alert, Button } from "@mui/material";
import PaginationRounded from "../components/PaginationRounded";
import { UserContextType } from "../types/types";
import { getData } from "../utils/utils";
import UserList from "../components/UserList";

import { UserContext } from "../context/userContext";
import styles from "../style/styles";

export default function Home() {
  const { users, setUsers } = React.useContext(UserContext) as UserContextType;

  const [page, setPage] = React.useState<number>(1);
  const [alert, setAlert] = React.useState<string>("");
  const navigate = useNavigate();

  const usersPerPage = 10;
  const paginationCount: number = Math.ceil(
    users ? users.length / usersPerPage : 0
  );

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
          <Grid item xs={12} sx={styles.homePageItems}>
            <Button
              onClick={() => handleOnClickNavigate()}
              variant="contained"
              sx={[
                styles.button,
                styles.buttonHover,
              ]}
            >
              Add new User
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          sx={[{ mt: 15 }, styles.homePageItems]}
        >
          <Alert severity="error"> {alert}</Alert>
        </Grid>
      )}
    </Grid>
  );
}
