import React, { useState } from 'react'

function QuestionBoard({bit,chosenAnswer,handleSelectedOption}) {
    

    return (
        <div className='quiz-box'>
            
            <h2 id='question'  > {bit.question} </h2>
            <div className='answer-box'>
                <label className={`${chosenAnswer === bit.options[0] ? 'checked-label' : ''} options-label `}>
                    <input type="radio" name="selected" value={bit.options[0]} onChange={(e)=>handleSelectedOption(e.target.value)}
                        checked={chosenAnswer === bit.options[0]}
                        />
                    {bit.options[0]}

                </label>
                <span></span>
                <label className={`${chosenAnswer === bit.options[1] ? 'checked-label' : ''} options-label `}>
                    <input type="radio" name="selected"  value={bit.options[1]}  onChange={(e)=>handleSelectedOption(e.target.value)}  checked={chosenAnswer === bit.options[1]}/>
                    {bit.options[1]}
                </label>
                <span></span>
                <label className={`${chosenAnswer === bit.options[2] ? 'checked-label' : ''} options-label `}>
                    <input type="radio" name="selected"  value={bit.options[2]}  onChange={(e)=>handleSelectedOption(e.target.value)} checked={chosenAnswer === bit.options[2]} />
                    {bit.options[2]}
                </label >
                <span></span>
                <label className={`${chosenAnswer === bit.options[3] ? 'checked-label' : ''} options-label `}>
                    <input type="radio" name="selected" value={bit.options[3]}  onChange={(e)=>handleSelectedOption(e.target.value)} checked={chosenAnswer === bit.options[3]} />
                    {bit.options[3]}
                </label>
                <span></span>
            </div>
        </div>
    )
}

export default QuestionBoard