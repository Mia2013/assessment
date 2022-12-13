import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Alert } from '@mui/material';
import { getOneUserById, editUser } from '../utils/utils';
import AddOrEditUser from '../components/AddOrEditUser';
import { User } from '../types/types';

export default function EditUser() {
  const [alert, setAlert] = useState<string>('');
  const [editAbleUser, SetEditAbleUser] = useState<User>();
  const { userId } = useParams();

  async function getOneUser() {
    try {
      const result = await getOneUserById(Number(userId));
      SetEditAbleUser({ ...result });
      setAlert('');
    } catch (error) {
      setAlert(
        'Sorry, but something went wrong, please try again later'
      );
    }
  }

  useEffect(() => {
    getOneUser();
  }, []);

  return (
    <Box>
      {!alert ? 
        <AddOrEditUser
          formTitle="Edit user"
          alertMessage="User updated successfully"
          buttonTitle="Update"
          AddOrEditUserFunction={editUser}
          userId={Number(userId)}
          editAbleUser={editAbleUser}
        /> : <Alert severity="error">{alert}</Alert>
      }
    </Box>
  );
}
