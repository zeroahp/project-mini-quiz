import {  getAPI, postAPI } from "../utils/request"


export const getUser = async(email = "", password = "") => {
    let pass = "";
    if(password !== ""){
        pass = `&password=${password}`
    }
    const result = await getAPI(`users?email=${email}${pass}`);
    return result;
}

export const createUser = async (options) => {
    const result = await postAPI(`users`, options);
    return result;
}

// export const deleteProduct = async(id) => {
//     const result = await deleteAPI("products/" +id);
//     return result;
// }