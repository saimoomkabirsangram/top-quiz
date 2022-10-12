import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/home",
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: "/",
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz/:id',
          loader : async ({params}) => {
            return fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }, 
          element: <Quiz></Quiz>
        },
        {
          path: 'topic/quiz/:id',
          loader : async ({params}) => {
            return fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }, 
          element: <Quiz></Quiz>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
