import { useEffect, useState } from "react";
import { getQuestions } from "../topic/quiz";
import { useNavigate, useParams } from "react-router-dom";
import { getnameTopic } from "../../service/topic";
import {getCookie} from "../../helpers/cookie"
import { createAnswers } from "../../service/answerService";
import "./quiz.scss"
import meo from "../../asset/image/download.jpeg"
import Swal from 'sweetalert2'

// CommonJS
function Quiz(){
    const Swal = require('sweetalert2')

    const param = useParams();
    const [quiz, setquiz] = useState([]);
    const navigate = useNavigate();
    const [nametopic, setnametopic] = useState('');
    useEffect(() => {
        const fetchAPI = async() =>{
            const result = await getnameTopic(param.id);
            setnametopic(result);
        }
        fetchAPI();
    }, []);

    useEffect(() => {
        const fetchAPI = async() =>{
            const result = await getQuestions(param.id);
            setquiz(result);
        }
        fetchAPI();
    }, []);


    const handleSubmit = async(e) => {
        e.preventDefault();
        let selectAnswers = [];
        for(let i = 0; i < e.target.elements.length ; i++ ){
            if(e.target.elements[i].checked === true){
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;
                selectAnswers.push({
                    questionId : parseInt(name),
                    answer: parseInt(value)
                })
            }     
        }
        const options = {
            userId: parseInt(getCookie("id")),
            topicId : parseInt(param.id),
            answers: selectAnswers
        }

        const result = await createAnswers(options);
        Swal.fire({
            title: 'Bạn chắc chưa!',
            text: 'Sai là tui đâm á nha',
            imageUrl: "https://ghechua.net/wp-content/uploads/2022/05/mep-cam-dao.jpg",
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
        })

        setTimeout(() => {
            Swal.fire({
                title: 'Bạn chắc chưa!',
                text: 'Sai là tui đâm á nha',
                imageUrl: "https://ghechua.net/wp-content/uploads/2022/05/mep-cam-dao.jpg",
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'Custom image',
                timer: 100, // Thời gian tắt thông báo sau 2 giây
                showConfirmButton: false,
                // confirmButtonText : 'Phải chắc á !'
            })
        }, 2000);

        if (result) {
            setTimeout(() => {
              navigate(`/result/${result.id}`);
            }, 3000); 
        }
        



    }
    return(
        <>
            <div className="quiz">
            {nametopic && (
                <h3>Chủ đề: {nametopic.name}</h3>
            )}
            
            {quiz.length > 0 && (
                <>
                <form className="quiz__form" onSubmit={handleSubmit}>
                {quiz.map((item, i) => (
                    <div key={item.id}>
                        <p >
                            Câu {i+1}: {item.question}
                        </p>
                        {item.answers.map((answer, index) => (
                            <div key={index}>
                                <input 
                                    type="radio"
                                    id={`quiz-${item.id}-${index}`}
                                    name={item.id}
                                    value={index}
                                    />
                                <label htmlFor={`quiz-${item.id}-${index}`}>
                                    {answer}
                                </label>
                            </div>
                        ))}

                    </div> 
                    
                ))}
                <button onSubmit={handleSubmit} className="quiz__button">Nộp bài</button>

                </form>     
                               
                </>
            )}
            </div>

            
        </>
    )
}

export default Quiz;

