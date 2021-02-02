import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useUserContext } from "../store/UserContext"

function UserList() {

    const { users, deleteUser } = useUserContext();

    if (users.length === 0) {
        return (
            <></>
        );
    }
    else {
        return (
            <>
                <List>
                    {
                        users.map((user) => 
                        <ListItem key={user.id}>
                            <ListItemText primary={user.name}/>
                            <ListItemSecondaryAction onClick={() => deleteUser(user.id)}>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>)
                    }
                </List>
            </>
        )
    }

}

export default UserList;