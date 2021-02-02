import React, { useContext, useEffect, useState } from "react";
import { getAllUsers, postUser, deleteUserById } from "../service/UserService"

const UserContext = React.createContext({});

const UserProvider = ({children}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data))
    }, [])

    function addUser(user){
        postUser(user).then(({ data }) => {
            setUsers([...users, data]);
        })
    }

    function deleteUser(id){
        deleteUserById(id).then(({ data }) => {
            setUsers(users.filter(u => u.id !== data.id));
        })
    }

    return (
        <UserContext.Provider value={{ users, addUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    )
}

function useUserContext(){
    const context = useContext(UserContext);
    if(!context)
        throw new Error();
    return context;
}

export { UserProvider, useUserContext }