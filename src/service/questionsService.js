import { getAPI } from "../utils/request";

export const getlistQuestion = async (id) => {
    const result = await getAPI(`questions?topicId=${id}`);
    return result;
}