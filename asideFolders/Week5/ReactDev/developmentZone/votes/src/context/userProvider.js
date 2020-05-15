import React, { useState } from "../../node_modules/@types/react";
import axios from "../../node_modules/axios";
export const UserContext = React.createContext();

export default function UserProvider(props) {
  const initialState = { user: {}, token: "", todos: [] };
  const [userState, setUserState] = useState(initialState);
  function signup(credentials) {
    const newUser = {
      name: credentials.username,
      username: credentials.username,
      password: credentials.password,
      birthdate: "20002015",
    };
    console.log(newUser);

    axios
      .get("/auth", newUser)
      .then((res) => console.log("blue"))
      .catch((err) => console.dir(err));
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
