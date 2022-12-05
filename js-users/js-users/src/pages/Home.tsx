import { useState } from "react";
import { List, ListItem, ListItemText, Divider, Grid } from "@mui/material";

import PaginationRounded from "../components/PaginationRounded";
import { User } from "../types";

type HomeProps = {
  paginationCount: number;
  usersPerPage: number;
  users: User[];
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
}: HomeProps) {
  const [page, setPage] = useState<number>(1);

  return (
    <Grid container style={styles.homeContainer}>
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
      </Grid>
      <Grid item xs={12}>
        <PaginationRounded
          paginationCount={paginationCount}
          page={page}
          setPage={setPage}
        />
      </Grid>
    </Grid>
  );
}
