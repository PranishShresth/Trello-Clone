import axios from "axios";
import getJwtToken from "./jwt";

// USER API
export const getCurrentUser = async (user) => {
  try {
    const user = await axios.get("/api/user/profile", {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return user;
  } catch (err) {}
};
export const fetchLoggedUser = async (loginvalues) => {
  try {
    const user = await axios.post("/api/user/login", loginvalues, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};
export const loginOauth = async (profile) => {
  try {
    const user = await axios.post("/api/user/oauth", profile, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const RegisterUser = async (signupvalues) => {
  try {
    const user = await axios.post("/api/user/register", signupvalues);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export const changeUserDetails = async (payload) => {
  try {
    const user = await axios.put("/api/user/details", payload, {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};

// BOARD PAGE API
export const CreateNewBoard = async (payload) => {
  try {
    let board = await axios.post("/api/board/create", payload, {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return board;
  } catch (err) {
    console.error(err);
  }
};

// export const getOneBoard = async (boardName) => {
//   try {
//     let board = await axios.get(
//       `/api/board/${boardName}`,
//       config
//     );
//     return board;
//   } catch (err) {}
// };

export const getAllBoards = async (payload) => {
  try {
    let board = await axios.get(`/api/board/${payload}/getAllBoards`, {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return board;
  } catch (err) {}
};

//when the component first mounts
export const getSpecificBoard = async (boardName) => {
  try {
    const config = {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let board = await axios.get(`/api/board/${boardName}`, {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return board;
  } catch (err) {
    console.error(err);
  }
};
// CARD APIs
export const addNewCard = async (payload) => {
  try {
    let card = await axios.post(`/api/board/card/create`, payload, {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return card;
  } catch (err) {
    console.error(err);
  }
};

export const addItemToCard = async (payload) => {
  try {
    let item = await axios.post(`/api/board/card/create`, payload, {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return item;
  } catch (err) {
    console.error(err);
  }
};

export const reOrderCardItems = async (payload) => {
  try {
    const boardCards = await axios.put("/api/board/card/reorder", payload, {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return boardCards;
  } catch (err) {}
};

export const updateCardItems = async (payload) => {
  return await axios.patch("/api/board/card/update", payload, {
    headers: {
      Authorization: "Bearer " + getJwtToken(),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const deleteCardItems = async (payload) => {
  return await axios.put("/api/board/card/items", payload, {
    headers: {
      Authorization: "Bearer " + getJwtToken(),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const changeCardTitle = async (payload) => {
  return await axios.put("/api/board/card", payload, {
    headers: {
      Authorization: "Bearer " + getJwtToken(),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
