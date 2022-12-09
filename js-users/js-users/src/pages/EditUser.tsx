// import { Grid, Button, Box, TextField, Alert, Typography } from "@mui/material";
// import React, { useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import { getOneUserById, editUser } from "../utils/utils";
// import {
//   FormData,
//   AlertType,
//   SeverityStatus,
//   User,
//   UserStatus,
// } from "../types/types";
// import { useNavigate } from "react-router-dom";

// export default function EditUser() {

//   const [alert, setAlert] = useState<AlertType>({
//     severity: SeverityStatus.Error,
//     message: "",
//   });
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//   });
//   const [user, setUser] = useState<User>({
//     id: -50000,
//     last_name: "",
//     first_name: "",
//     status: UserStatus.Active,
//     created_at: "",
//     updated_at: "",
//     url: ""
//   });
//   const [loadingAlert, setLoadingAlert] = useState<string>("");
//   const { userId } = useParams();
//   const navigate = useNavigate();

//   async function getOneUser() {
//     try {
//       const result = await getOneUserById(Number(userId));
//       setUser({ ...result });
//       setLoadingAlert("");
//     } catch (error) {
//       setLoadingAlert(
//         "Sorry, but something went wrong, please try again later"
//       );
//     }
//   }

//   useEffect(() => {
//     getOneUser();
//   }, []);

//   function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   }

//   async function handleOnSubmit(e: SyntheticEvent) {
//     e.preventDefault();
//       try {
//         await editUser(formData.lastName, formData.firstName, Number(userId));
//         setUser((prev) => ({
//           ...prev,
//           last_name: formData.lastName,
//           first_name: formData.firstName,
//         }));
//         setAlert({
//           severity: SeverityStatus.Success,
//           message: "User updated successfully",
//         });
//         setFormData({ firstName: "", lastName: "" });
//       } catch (error) {
//         setAlert({
//           severity: SeverityStatus.Error,
//           message: "Something went wrong, please try again later",
//         });
//     }
//   }
//   const handleOnClickNavigateBack = () => {
//     navigate("/");
//   };

//   return (
//     <Grid container>
//       <Grid
//         item
//         xs={12}
//         sx={{
//           m: 5,
//           textAlign: "end",
//         }}
//       >
//         <Button
//           onClick={() => handleOnClickNavigateBack()}
//           variant="contained"
//           sx={{
//             backgroundColor: "#FF177A",
//           }}
//         >
//           Back
//         </Button>
//       </Grid>
//       <Grid
//         item
//         xs={12}
//         sx={{
//           mt: 5,
//           textAlign: "center",
//           mx: "auto",
//           width: "100%",
//           maxWidth: { xs: "300px", md: "450px" },
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           borderRadius: "20px",
//         }}
//       >
//         <Box
//           component="form"
//           sx={{
//             "& .MuiTextField-root": { m: 3, width: "90%" },
//             my: 5,
//           }}
//           noValidate
//           autoComplete="off"
//           onSubmit={handleOnSubmit}
//         >
//           <Typography variant="h3" my={3}>
//             Update user
//           </Typography>
//           <div>
//             <Typography variant="body2" align="left" mx={3}>
//               Old first name: {user.first_name}
//             </Typography>
//             <TextField
//               id="outlined-error-helper-text"
//               label="First Name"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleOnChange}
//               placeholder={"First name: " + user?.first_name}
//             />
//           </div>
//           <div>
//             <Typography variant="body2" align="left" mx={3}>
//               Old last name: {user.last_name}
//             </Typography>
//             <TextField
//               id="outlined-error-helper-text"
//               label="Last Name"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleOnChange}
//             />
//           </div>
//           <Button variant="contained" type="submit">
//             Update
//           </Button>
//         </Box>
//         {alert.message && (
//           <Alert severity={alert.severity}>{alert.message}</Alert>
//         )}
//       </Grid>
//     </Grid>
//   );
// }

import React from "react";
import AddOrEditUser from "../components/AddOrEditUser";
import { editUser } from "../utils/utils";
import { useParams } from "react-router-dom";

export default function AddNewUser() {
  const { userId } = useParams();
  return (
    <AddOrEditUser
      formTitle="Add new user"
      alertMessage="User added successfully"
      buttonTitle="Send"
      AddOrEditUserFunction={editUser}
      userId={Number(userId)}
    />
  );
}
