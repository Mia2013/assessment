import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import { getData } from "./utils";
import { User } from "./types";

type stylesObject = {
  container: {
    backgroundImage: string;
    backgroundRepeat: string;
    backgroundSize: string;
    backgroundPosition: string;
    minHeight: string;
  };
};

const styles: stylesObject = {
  container: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    minHeight: "100vh",
  },
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
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
    <Box className="App" style={styles.container}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              paginationCount={paginationCount}
              usersPerPage={usersPerPage}
              users={users}
              alert={alert}
            />
          }
        />
        <Route path="new" element={<New />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </Box>
  );
}

export default App;
