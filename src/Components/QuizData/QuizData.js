import React from 'react';
import QuestionData from '../QuestionData/QuestionData';
import Quiz from '../Quiz/Quiz';

function QuizData({quizData}) {
    // console.log(quizData);
    const {options, correctAnswer, id, question} = quizData;
    return (
        <div className='bg-gray-200 p-3 rounded-lg'>
            <div> Question : {question}
            </div>
            {
                quizData.options.map((item) => <QuestionData
                    key={item.id}
                    id={id}
                    correctAnswer={correctAnswer}
                    options={options}
                ></QuestionData>)}
        </div>
    );
}

export default QuizData;