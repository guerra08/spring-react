import Axios from "../config/AxiosConfig";

function getAllUsers() {
    return Axios.get("/users");
}

function getUserById(id) {
    return Axios.get(`/users/${id}`);
}

function deleteUserById(id){
    return Axios.delete(`/users/${id}`);
}

function postUser(user){
    return Axios.post("/users", user);
}

function patchUser(user, id){
    return Axios.patch(`/users/${id}`, user);
}

export { getAllUsers, getUserById, deleteUserById, postUser, patchUser }