import React from 'react';

function QuestionData({options, correctAnswer}) {
    console.log(options);
    return (
        <div>
            <div className='bg-amber-200 mt-3'>
            <input name="flexRadioDefault" id="flexRadioDefault1" type="radio" />
            <label className="form-check-label" for="flexRadioDefault1" htmlFor="">{options}</label>
            </div>
        </div>
    );
}

export default QuestionData;