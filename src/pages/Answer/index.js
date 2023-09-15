import { useEffect, useState } from "react";
import { getAnswerUserId } from "../../service/answerService";
import { getTopic, getnameTopic } from "../../service/topic";
import { Link } from "react-router-dom";
import "./answer.scss"

function Answer(){

    const [AnswerUser, setAnswerUser] = useState([]);
    const [idTopic, setidTopic] = useState([]);

    useEffect(() => {
        const fetch = async() => {
            const AnswerUserId = await getAnswerUserId();
            const topic = await getTopic();
            // console.log(AnswerUserId);
            // console.log(topic,"-----------");

            let result = [];
            for(let i = 0; i< AnswerUserId.length ; i++){
                result.push({
                    ...AnswerUserId[i],
                    ...topic.find((item) => 
                        item.id === AnswerUserId[i].topicId,
                    ),
                    id: AnswerUserId[i].id,
                })
            }

            setAnswerUser(result)

        }
        fetch();
    }, []);
    // console.log(AnswerUser);

    return(
        <>
            <div className="answer">
                <h2>Danh sách câu trả lời</h2>
                {AnswerUser.length >0 && (
                    <table className="answer_table">
                        <thead className="answer__table--head">
                            <tr>
                                <th>ID</th>
                                <th>Topic</th>
                                <th>Answer</th>
                            </tr>
                        </thead>
                        <tbody className="answer__table--body">
                            {AnswerUser.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to={"/result/"+ item.id}>
                                            Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                    
                )}
            </div>
            
        </>
    )
}

export default Answer;