import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
// import Quiz from '../Quiz/Quiz'

const Home = () => {
    const LodeQuiz = useLoaderData().data

    return (
        <div>
            <div className="p-6 py-12  dark:bg-violet-400 dark:text-gray-900 bg-lime-200 ">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-3xl tracking-tighter font-bold">Upgrade your iQ With TopQuiz
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Best Part Of Problem-Solving:</span>
                            <span className="font-bold text-lg">TopQuiz</span>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-4 mt-4 lg:mt-0 py-2 border-2 rounded-3xl border-black">Go For A Trip</a>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-4  gap-3 sm:grid-cols-1 p-4 dark:bg-gray-700 text-gray-100'>
                {
                    LodeQuiz.map(topic => <Topic
                        key={topic.id}
                        LodeQuiz={topic}
                    >
                    </Topic>)
                }
            </div>
        </div>
    );
};

export default Home;