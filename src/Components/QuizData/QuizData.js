import React from 'react';
import QuestionData from '../QuestionData/QuestionData';
import Quiz from '../Quiz/Quiz';

function QuizData({quizData}) {
    // console.log(quizData);
    const {correctAnswer, id, question} = quizData;
    return (
        <div className='bg-gray-200 p-3 rounded-lg'>
            <div> Question : {question}
            </div>
            {
                quizData.options.map((option) => <QuestionData
                    key={option.id}
                    id={id}
                    correctAnswer={correctAnswer}
                    option={option}
                ></QuestionData>)}
        </div>
    );
}

export default QuizData;