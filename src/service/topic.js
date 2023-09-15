import {  getAPI, postAPI } from "../utils/request"

export const getTopic = async() => {
    const result = await getAPI("topics");
    return result;
}

export const getnameTopic = async(id) => {
    const result = await getAPI(`topics/${id}`);
    return result;
}