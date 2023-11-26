// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QuestionBoard from './QuestionBoard';
import Results from './Results';

function Homepage() {

    const [quizCountArray, setQuizCountArray] = useState(null)




    const apiUrl = "https://server3quiz.onrender.com/";


    const [apiData, setApiData] = useState(null)

    const [currentQno, setCurrentQNo] = useState(-1)

    const [buttonText, setButtonText] = useState("Start")

    const [yourScore, setYourScore] = useState(0)


    const [chosenAnswer, setChosenAnswer] = useState('');

    const [questionTime,setQuestionTime] = useState(0)

    const handleSelectedOption = (value) => {
        setChosenAnswer(value);
    };

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setApiData(data);
                console.log(data)
            })
            .catch((error) => console.log(error))


    }, [])


    useEffect(() => {
        if (apiData) {
            const lengthofapi = apiData.length;
            const questionArray = (Array.from({ length: lengthofapi }, (_, index) => index));
            const RandomArray = questionArray.sort(() => Math.random() - 0.5);
            setQuizCountArray(RandomArray);
            // console.log(apiData)


        }
        // console.log(quizCountArray)

    }, [apiData])

    

    useEffect(()=> {
        const updateTime = () => {
            
            if(currentQno>=0 && currentQno<quizCountArray.length-1 )  {
                setQuestionTime(prevTime => prevTime + 1);

            }


          };
      
          const intervalId = setInterval(updateTime, 1000);
          return () => {
            clearInterval(intervalId);
          };
    },[currentQno])

    if(questionTime == 10) {
        setCurrentQNo(currentQno+1)
        setQuestionTime(0)
    }



    const NextQuestionClick = () => {


        // if(currentQno == quizCountArray.length-2) {
        //     setButtonText("Restart")
        // }

        if (currentQno== -1) {
            console.log("wait, api loading")
        }

        if (currentQno == quizCountArray.length -1) {
            setButtonText('Restart')
            setCurrentQNo(-1)
            setYourScore(-1)
            setQuestionTime(0)
            
        }
        // else if(currentQno == quizCountArray.length -1) {

        // }


        else if (currentQno < quizCountArray.length-1 ) {

            console.log(quizCountArray.length)
            setCurrentQNo(currentQno + 1)
            setButtonText("Next")
            setQuestionTime(0)
            console.log(currentQno)
            


        }


        if (currentQno>=0) {
            if(apiData[quizCountArray[currentQno]].answer == chosenAnswer) {
                setYourScore(yourScore + 1)
        }
        setChosenAnswer('')
        }
        // console.log(currentQno)
        // const timeInSeconds = (time / 1000000).toFixed(2);


    }




    return (
        <div className='homepage'>
            <p className='timer'> { currentQno>=0 && currentQno<quizCountArray.length-1 && questionTime} </p>
            <h2 className='title-text'  >Handy Quiz</h2>

            {apiData && quizCountArray && currentQno >=0 && (
                currentQno == (quizCountArray.length - 1) ? (
                    <Results yourScore={yourScore} />
                ) : (
                    <QuestionBoard
                        bit={apiData[quizCountArray[currentQno]]}
                        handleSelectedOption={handleSelectedOption}
                        chosenAnswer={chosenAnswer}
                    />
                )
            )}


            {apiData?
            <button onClick={NextQuestionClick} className='next-btn' >{buttonText}</button>
            : <p>Fetching API....</p>
            }
            { 0<=currentQno && currentQno<quizCountArray.length  && 
                (<progress max={ quizCountArray.length} min={0} value={currentQno+1}  className='progress-bar' ></progress>
               
            
            )}

        </div>
    );
}

export default Homepage;
