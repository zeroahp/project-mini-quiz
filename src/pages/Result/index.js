import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswers } from "../../service/answerService";
import { getlistQuestion } from "../../service/questionsService";
import { getTopic, getnameTopic } from "../../service/topic";
import "./result.scss"
import { Link } from "react-router-dom";
function Result(){
    const param = useParams();
    const [dataresult, setdataresult] = useState([]);
    const [dataTopic, setdataTopic] = useState([]);
    const [inforesult, setinforesult] = useState([]);

    useEffect(() => {
       const fetch = async() => {
        const dataAnswers = await getAnswers(param.id);
        const dataQuestions = await getlistQuestion(dataAnswers.topicId);
        const Topic = await getTopic();

        let result = [] ;
        for(let i = 0; i < dataQuestions.length ; i++){
            result.push({
                ...dataQuestions[i],
                ...dataAnswers.answers.find(
                    (item) => item.questionId === dataQuestions[i].id)                  
            });
        }
        setdataresult(result);
        // console.log(result);

        const infoTopic = await getnameTopic(dataAnswers.topicId);
        setdataTopic(infoTopic);
        //----------------------
        let countCorrectTrue = 0;
        let countCorrectFalse = 0;
        let mark = 0;

        for(const item of result){
            if(item.answer === item.correctAnswer){
                countCorrectTrue += 1;
                mark += 5;
            }
            else {countCorrectFalse +=1;}
        }

        let info = [
            {
                countCorrectTrue: countCorrectTrue,
                countCorrectFalse : countCorrectFalse,
                total: result.length,
                ratio: ((countCorrectTrue / result.length) * 100).toFixed(0),
                mark: mark,
            }
        ]
        setinforesult(info);
        
       }
       fetch();
    }, []);

    return(
        <>
            <div className="result">
            {dataTopic && 
                    <h3 className="result__topic">Kết quả chủ đề: {dataTopic.name}</h3>
                
            }
            {inforesult.length && 
                <div className="result__total">
                    {inforesult.map((item, index) => 
                    (
                        <div key={index} className="result__total--item">
                            <h2>Tổng điểm : <strong>{item.mark}</strong></h2>
                            <span>
                                Đúng: <strong>{item.countCorrectTrue}</strong>
                            </span>
                            <span>  |  Sai: <strong>{item.countCorrectFalse}</strong>
                            </span>
                            <span>  |  Tổng số câu: <strong>{item.total} </strong>                                
                            </span>
                            <span>  |  Tỉ lệ: <strong>{item.ratio}%</strong>                                
                            </span>
                        </div>   
                    ))}
                </div>
            }

            <div className="button__back">
                <Link to={"/answer"}>
                    Back 
                </Link>
            </div>

            <div className="result__content">
            {dataresult.length > 0 && (
                <div className="result__list">
                    {dataresult.map((item, i) => (
                        <div key={item.id} className="result__item">
                            <p >
                                Câu {i + 1}: {item.question}
                                {item.correctAnswer === item.answer ? (
                                    <span className="result__tag result__tag--true">
                                        Đúng
                                    </span>
                                ) : (
                                    <span className="result__tag result__tag--false">
                                        Sai
                                    </span>
                                )}                                                            
                            </p>
                            {item.answers.map((answer, index) => {
                                let className = "";
                                let checked = false;

                                if(item.answer === index){
                                    checked = true;
                                    className = "result__item--selected"
                                }

                                if(item.correctAnswer === index){
                                    className += " result__item--result"
                                }

                                return(
                                    <div key={index}>
                                        <input type="radio" checked={checked} disabled/>
                                        <label className={className}>{answer}</label>
                                    </div>
                                )

                            })}
                            
                        </div>
                    ))}
                </div>
            )}
            
            </div>
            
            <div className="button__start">
                <Link to={"/quiz/"+ dataTopic.id}>
                    Start Again    
                </Link>
            </div>
            </div>

            
        </>
    )
}  

export default Result;

 