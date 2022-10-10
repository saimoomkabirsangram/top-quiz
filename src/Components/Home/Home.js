import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 bg-lime-200 ">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-3xl tracking-tighter font-bold">Upgrade your iQ With Top Quiz
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Best Part Of Problem-Solving:</span>
                            <span className="font-bold text-lg">TopQuiz</span>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 border-2 border-black">See More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;