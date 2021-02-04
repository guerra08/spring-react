import React, { useContext, useEffect, useState } from "react";
import { getAllUsers, postUser, deleteUserById } from "../service/UserService"

const UserContext = React.createContext({});

const UserProvider = ({children}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data))
    }, [])

    async function addUser(user){
        try {
            const { data } = await postUser(user);
            setUsers([...users, data]);
            return true;
        } catch (err) {
            return false;
        }
    }

    async function deleteUser(id){
        try {
            const { data } = await deleteUserById(id);
            setUsers(users.filter(u => u.id !== data.id));
            return true;
        } catch (err) {
            return false;
        }
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