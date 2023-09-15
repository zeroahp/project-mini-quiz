import { useEffect, useState } from "react";
import { getTopic } from "../../service/topic";
import "./topic.scss"
import { Link } from "react-router-dom";

function Topic(){

    const [topic, settopic] = useState([]);
    useEffect(() => {
        const fetchAPI = async() =>{
            const result = await getTopic();
            // console.log(settopic);
            settopic(result);
        }
        fetchAPI();
    }, []);
    return(
        <>  
           <div className="layout_topic">
           <h2>Danh sách chủ đề</h2>
            <table className="table">
                <thead className="table__head">
                    <tr>
                        <th>ID</th>
                        <th>Tên chủ đề</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                
                <tbody className="table__body">
                    {topic. length > 0 && (
                        topic. map(item => (
                            <tr  key={item.id}>
                                <td className="table__id">{item.id}</td>
                                <td>{item.name}</td>
                                <td className="table__button">
                                    <Link to={`/quiz/${item.id}`}>Làm bài</Link>
                                </td>
                            </tr>
                        ))
                    )}
                    
                </tbody>
            </table>
           </div>
        </>
    )
}

export default Topic;