import React, { useState } from "react";
import Axios from "../../node_modules/axios";
export const UserContext = React.createContext();

const axios = Axios.create()

axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initialState = {
        user: JSON.parse(localStorage.getItem("user")) || {}
        , token: localStorage.getItem("token") || ""
        , issues: [], 
        allIssues: []
};
  const [userState, setUserState] = useState(initialState);
  function signup(credentials) {
    const newUser = {
      name: credentials.username,
      username: credentials.username,
      password: credentials.password,
      birthdate: "20002015",
    };
    console.log(newUser);

    Axios
      .post("auth/signup", newUser)
        .then((res) => {
            console.log(res.data)

            const { user, token } = res.data

            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))

            setUserState(prevUserState => ({
                ...prevUserState, 
                user, token
            }))

        })
        .catch((err) => console.dir(err.response.data.errMsg));
    }
    function login(credentials) {
        
        console.log(credentials);

        Axios
            .post("auth/", credentials)
            .then((res) => {
                console.log(res.data)

                const { user, token } = res.data

                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))

                getUserIssues()
                getIssues()

                setUserState(prevUserState => ({
                    ...prevUserState,
                    user, token
                }))

            })
            .catch((err) => console.dir(err.response.data.errMsg));
    }


    function logout() {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUserState({
            user: {}, 
            token: "", 
            issues: [], allIssues: []
        })
    }

    ///////////////////////////////////////////////////////   TODOS START HERE ////////////////////////


    function addIssue(newIssue) {
        axios.post("app/issues", newIssue).then(res => {
            console.log(res.data)
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data],
                allIssues: [...prevState.allIssues, res.data]


            }))
        }).catch((err) => { console.log(err.response.data.errMsg) })
       }

    function getUserIssues() {

        axios.get("app/issues/user").then(res => {
            console.log(res.data)
            setUserState(prevState => ({
                ...prevState,
                issues: res.data

            }))
        }).catch((err) => { console.log(err.response.data.errMsg) })
    }
    function getIssues() {

        axios.get("app/issues").then(res => {
            console.log(res.data)
            setUserState(prevState => ({
                ...prevState,
                allIssues: res.data

            }))
        }).catch((err) => { console.log(err) })
    }


    return (
    <UserContext.Provider
      value={{
        ...userState,
              signup,
              logout,
                login, 
                addIssue, 
                 
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
