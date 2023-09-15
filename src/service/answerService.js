import { getCookie } from "../helpers/cookie";
import { getAPI, postAPI } from "../utils/request";

export const createAnswers = async (options) => {
    const result = await postAPI(`answers`, options);
    return result;
}

export const getAnswers = async (id) => {
    const result = await getAPI(`answers/${id}`);
    return result;
}

export const getAnswerUserId = async() => {
    const userId = getCookie("id")
    const result = await getAPI(`answers?userId=${userId}`);
    return result;
}