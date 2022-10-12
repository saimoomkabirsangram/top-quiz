import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({LodeQuiz}) => {
    // console.log(LodeQuiz);
    return (
        <div>
           <div className=' font-bold  rounded-xl p-3 bg-zinc-600 text-gray-100'>
            <img className='h-64 w-full' src={LodeQuiz.logo} alt="" />
            <h1 className='text-xl text-center my-3'>{LodeQuiz.name}</h1>
            <div className='flex'>
            <h3>Total: {LodeQuiz.total}</h3>
            <Link to={`/quiz/${LodeQuiz.id}`}>
            <button className='text-justify border-2 rounded-lg p-1 ml-16 dark:bg-zinc-700'>Run Quiz</button>
            </Link>
            </div>
            </div> 
        </div>
    );
};

export default Topic;