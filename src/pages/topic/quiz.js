import { getAPI } from "../../utils/request"

export const getQuestions = async (id) =>{
    const result = await getAPI(`questions?topicId=${id}`);
    return result;
}