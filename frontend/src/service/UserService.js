import Axios from "../config/AxiosConfig";

function getAllUsers() {
    return Axios.get("/users");
}

function getUserById(id) {
    return Axios.get(`/users/${id}`);
}

export { getAllUsers, getUserById }