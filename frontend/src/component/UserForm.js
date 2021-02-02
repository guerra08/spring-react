import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { useState } from 'react';
import { useUserContext } from "../store/UserContext"

function UserForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const { addUser } = useUserContext();

    const nameChangeHandler = (e) =>{
        setName(e.target.value);
    }

    const emailChangeHandler = (e) =>{
        setEmail(e.target.value);
    }

    const formSubmit = () => {
        const user = {
            name,
            email
        }
        addUser(user);
    }

    return (
        <>
            <FormControl>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <Input id="name-input" value={name} onChange={nameChangeHandler}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email-input">Email address</InputLabel>
                <Input id="email-input" type="email" value={email} onChange={emailChangeHandler}/>
            </FormControl>
            <Button onClick={formSubmit}>Add</Button>
        </>

    )
}

export default UserForm;