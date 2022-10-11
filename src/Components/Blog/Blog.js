import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="text-gray-700 mb-10">
                <div className="container max-w-4xl px-10 mt-10 py-6 mx-auto rounded-lg shadow-sm bg-green-400">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">5 October 2022</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">React</a>
                    </div>
                    <div className="mt-3">
                        <h1 className="text-2xl font-bold">What is the purpose of react router?</h1>
                        <p className="mt-2">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400 font-bold">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <span className="hover:underline dark:text-gray-400 font-bold">Posted By: Sangram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-gray-700">
                <div className="container max-w-4xl px-10 py-6 mx-auto mb-10 rounded-lg shadow-sm bg-green-400">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">10 October 2022</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">React</a>
                    </div>
                    <div className="mt-3">
                        <h1 className="text-2xl font-bold">How does context api work?</h1>
                        <p className="mt-2">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400 font-bold">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <span className="hover:underline dark:text-gray-400 font-bold">Posted By: Sangram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-gray-700">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-400">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">11 October 2022</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">React</a>
                    </div>
                    <div className="mt-3">
                        <h1 className="text-2xl font-bold">What is useref?</h1>
                        <p className="mt-2">Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM.current property to the corresponding DOM node whenever that node changes.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400 font-bold">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <span className="hover:underline dark:text-gray-400 font-bold">Posted By: Sangram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;