import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useUserContext } from "../store/UserContext"
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

function UserList() {

    const { users, deleteUser } = useUserContext();
    const history = useHistory();

    const deleteHandler = (id) => {
        if(deleteUser(id))
            toast.success("User deleted with success!");
        else
            toast.error("Ooops, something went wrong!");
    }

    const navigateToEdit = (userToEdit) => {
        history.push({pathname: "/user", state: { user: userToEdit }});
    }

    if (users.length === 0) {
        return (
            <>
                <h2>No Users found!</h2>
            </>
        );
    }
    else {
        return (
            <>
                <List>
                    {
                        users.map((user) => 
                        <ListItem key={user.id} button onClick={() => navigateToEdit(user)}>
                            <ListItemText primary={user.name}/>
                            <ListItemSecondaryAction onClick={() => deleteHandler(user.id)}>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>)
                    }
                </List>
                <ToastContainer/>
            </>
        )
    }

}

export default UserList;