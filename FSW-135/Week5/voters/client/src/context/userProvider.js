import React, { useState } from "react";
import axios from "axios";
export const UserContext = React.createContext();

export default function UserProvider(props) {
  const initialState = { user: {}, token: "", todos: [] };
  const [userState, setUserState] = useState(initialState);
  function signup(credentials) {
    console.log(credentials);
    const newUser = {
      name: credentials.username,
      username: credentials.username,
      password: credentials.password,
      birthdate: "20002015",
    };
    console.log(axios);
    axios
      .post("/signup", newUser)
      .then((res) => console.log("blue"))
      .catch((err) => console.log("red"));
  }
  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
