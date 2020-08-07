import axios from "axios";
import getJwtToken from "./jwt";

const config = {
  headers: {
    Authorization: "Bearer " + getJwtToken(),
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const getCurrentUser = async (user) => {
  try {
    const user = await axios.get(
      "http://localhost:5000/api/user/profile",
      config
    );
    return user;
  } catch (err) {}
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

// export const getOneBoard = async (boardName) => {
//   try {
//     let board = await axios.get(
//       `http://localhost:5000/api/board/${boardName}`,
//       config
//     );
//     return board;
//   } catch (err) {}
// };

export const getAllBoards = async (payload) => {
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let board = await axios.get(
      `http://localhost:5000/api/board/${payload}/getAllBoards`,
      config
    );
    return board;
  } catch (err) {}
};

export const addNewCard = async (payload) => {
  try {
    let card = await axios.post(
      `http://localhost:5000/api/board/card/create`,
      payload,
      config
    );
    return card;
  } catch (err) {
    console.error(err);
  }
};

export const addItemToCard = async (payload) => {
  try {
    let item = await axios.post(
      `http://localhost:5000/api/board/card/create`,
      payload,
      config
    );
    return item;
  } catch (err) {
    console.error(err);
  }
};

export const reOrderCardItems = async (payload) => {
  try {
    const boardCards = await axios.put(
      "http://localhost:5000/api/board/card/reorder",
      payload,
      config
    );
    return boardCards;
  } catch (err) {}
};

//when the component first mounts
export const getSpecificBoard = async (boardName) => {
  try {
    let board = await axios.get(
      `http://localhost:5000/api/board/${boardName}`,
      config
    );
    return board;
  } catch (err) {
    console.error(err);
  }
};
