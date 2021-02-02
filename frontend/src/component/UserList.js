import { useEffect, useState } from "react";

import { List, ListItem } from "@material-ui/core";
import { getAllUsers } from "../service/UserService";

function UserList() {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        getAllUsers().then(res => {
            console.log(res);
            setData(res.data);
        })
    }, [])

    if(data.length === 0){
        return (
            <></>
        );
    }
    else{
        return (
            <>
                <List>
                    {
                        data.map((user) => <ListItem key={user.id}>{user.name} - {user.email}</ListItem>)
                    }
                </List>
            </>
        )
    }
     
  }
  
  export default UserList;