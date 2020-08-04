import axios from "axios";
import getJwtToken from "./jwt";

const config = {
  headers: {
    "x-auth-token": getJwtToken(),
  },
};
export const fetchLoggedUser = async (loginvalues) => {
  try {
    const user = await axios.post(
      "http://localhost:5000/api/user/login",
      loginvalues,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const RegisterUser = async (signupvalues) => {
  try {
    const user = await axios.post(
      "http://localhost:5000/api/user/register",
      signupvalues
    );
    return user.data;
  } catch (error) {
    console.error(error);
  }
};

export const CreateNewBoard = async (payload) => {
  try {
    let board = await axios.post(
      "http://localhost:5000/api/board/create",
      payload,
      config
    );
    return board;
  } catch (err) {
    console.error(err);
  }
};

export const getBoard = async (boardName, payload) => {
  try {
    let board = await axios.post(
      `http://localhost:5000/api/board/${boardName}`,
      payload,
      config
    );
    return board;
  } catch (err) {}
};

export const getAllBoards = async (payload) => {
  try {
    let board = await axios.get(
      `http://localhost:5000/api/board/${payload}/getAllBoards`,
      config
    );
    return board;
  } catch (err) {}
};
