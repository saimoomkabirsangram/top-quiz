import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
           <header className="p-4 bg-gray-800 text-gray-100">
           <div
            onClick={() => setOpen(!open)}
            className="h-6 w-6 text-left dark:bg-gray-800 md:hidden"
            >
            {open ? <XMarkIcon /> : <Bars3Icon />}
          </div>
	<div className="container flex justify-between h-16 mx-auto">
		<ul className=  {` items-stretch  absolute   duration-500 ease-in md:static md:flex ${open ? 'top-9 left-[20px]' : 'top-[-120px] left-[20px]'}`} >
			<li className="flex">
				<Link rel="noopener noreferrer" to="/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Topic</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blogs</Link>
			</li>
		</ul>
		<Link rel="noopener noreferrer" to="#" aria-label="Back to homepage" className="flex items-center p-2">
            <h1 className='text-3xl font-bold'>TopQuiz</h1>
		</Link>
		<div className="flex items-center md:space-x-4">
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
						<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg>
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:dark:bg-gray-900" />
			</div>
			<button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-green-400 text-gray-900">Log in</button>
		</div>
	</div>
</header> 
        </div>
    );
};

export default Header;