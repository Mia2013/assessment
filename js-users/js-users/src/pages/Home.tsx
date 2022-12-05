import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Alert,
} from "@mui/material";

import PaginationRounded from "../components/PaginationRounded";
import { User } from "../types";

type HomeProps = {
  paginationCount: number;
  usersPerPage: number;
  users: User[];
  alert: string;
};

type stylesObject = {
  homeContainer: {
    backgroundImage: string;
    backgroundRepeat: string;
    backgroundSize: string;
    backgroundPosition: string;
    minHeight: string;
  };
};

const styles: stylesObject = {
  homeContainer: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "100vh",
  },
};

export default function Home({
  paginationCount,
  usersPerPage,
  users,
  alert,
}: HomeProps) {
  const [page, setPage] = useState<number>(1);

  return (
    <Grid container style={styles.homeContainer}>
      {!alert ? (
        <Grid container item xs={12}>
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
                    </ListItem>
                    <Divider component="li" />
                  </Grid>
                );
              })}
          </List>
          <Grid item xs={12}>
            <PaginationRounded
              paginationCount={paginationCount}
              page={page}
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
