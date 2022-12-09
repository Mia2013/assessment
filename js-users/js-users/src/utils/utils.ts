import axios from "axios";
import { UserStatus, User, Users, FormData } from "../types/types";

const URL = "https://assessment-users-backend.herokuapp.com";

export async function getData() {
  try {
    const response = await axios.get(`${URL}/users.json`);
    if (response.status === 200) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function addUser(
  formData: FormData,
  userId: number
): Promise<any> {
  try {
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      status: UserStatus.Active,
    };
    const response = await axios.post(`${URL}/users.json`, data);
    if (response.status === 201) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getOneUserById(userId: number) {
  try {
    const response = await axios.get(`${URL}/users/${userId}.json`);
    if (response.status === 200) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function editUser(
  formData: FormData,
  userId: number
): Promise<any> {
  try {
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
    };
    const response = await axios.put(`${URL}/users/${userId}.json`, data, {
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 204) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function updateUser(
  firstName: string,
  lastName: string,
  isLocked: boolean,
  userId: number
) {
  try {
    const formData = {
      first_name: firstName,
      last_name: lastName,
      status: isLocked ? "active" : "locked",
    };
    const response = await axios.put(`${URL}/users/${userId}.json`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 204) {
      const result = response.data;
      return result;
    }
    throw new Error();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
