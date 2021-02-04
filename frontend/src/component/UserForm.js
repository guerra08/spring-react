import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useUserContext } from "../store/UserContext"
import { useLocation } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

function UserForm() {

    const { addUser, updateUser } = useUserContext();

    const location = useLocation();
    const editUser = (location.state) ? location.state.user : null;

    const [name, setName] = useState((editUser) ? editUser.name : "");
    const [email, setEmail] = useState((editUser) ? editUser.email : "");

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const formSubmit = () => {
        const user = {
            name,
            email
        }
        let response = false;
        response = (editUser) ? updateUser(user, editUser.id) : addUser(user);
        if (response)
            toast.success("Nice!");
        else
            toast.error("Ooops!");
    }

    return (
        <>
            <FormControl>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <Input id="name-input" value={name} onChange={nameChangeHandler} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email-input">Email address</InputLabel>
                <Input id="email-input" type="email" value={email} onChange={emailChangeHandler} />
            </FormControl>
            <Button onClick={formSubmit}>Add</Button>
            <ToastContainer />
        </>

    )
}

export default UserForm;