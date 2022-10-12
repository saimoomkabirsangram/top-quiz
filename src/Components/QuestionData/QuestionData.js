import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QuestionData({option, correctAnswer}) {
    // console.log(options);
    const notify = () => toast(viewResult())
    const viewResult= ()=>{
        if(option === correctAnswer){
            return 'Correct Answer'
        }
        else{
            return 'Incorrect Answer'
        }
    }
    return (
        <div>
            <div className='bg-amber-200 mt-3'>
            <input onClick={notify} name="flexRadioDefault" id="flexRadioDefault1" type="radio" />
            <label className="form-check-label" for="flexRadioDefault1" htmlFor="">{option}</label>
            <ToastContainer autoClose = {2000} ></ToastContainer>
            </div>
        </div>
    );
}

export default QuestionData;