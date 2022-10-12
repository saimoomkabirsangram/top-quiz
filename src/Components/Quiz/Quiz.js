import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';

const Quiz = ({LodeQuiz}) => {
    const Quzes = useLoaderData().data
    // console.log(Quzes);
    return (
        <div className=''>
            <div className='grid gap-5 mx-5 my-5 md:grid-cols-4 sm:grid-cols-3' >
            {
                Quzes.questions.map(quizData => <QuizData
                key = {Quzes.id}
                quizData = {quizData}
                ></QuizData>)
            }
            </div>
        </div>
    );
};

export default Quiz;