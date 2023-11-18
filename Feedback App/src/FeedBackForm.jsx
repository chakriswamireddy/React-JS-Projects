<<<<<<< HEAD
import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedBackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating,setRating] = useState(10)
    const [message,setMessage] = useState('')
    const [disabled,setDisabled] = useState(true)
    

    const handleTextChange =(e) => {
        if(text === '') {
            setMessage(null)
            setDisabled(true)
        } else if(text!=='' && text.trim().length <=10 ){
            setMessage("review must have more than 10 letters")
            setDisabled(true)
        } else {
            setMessage(null)
            setDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            console.log(newFeedback)
            handleAdd(newFeedback)

            setText('')
        }
    }



  return (
    <div>
        <Card>
            <form onSubmit={handleSubmit} >
                <h5>How do you rate our service?</h5>
                <RatingSelect select = {(rating) => setRating(rating)} />  {/*very important for components*/}
                <div className="input-group">
                    <input type="text" onChange={handleTextChange} value={text} />
                    <Button type='submit' isDisabled={disabled} >
                        Send
                    </Button>
                </div>
            </form>

            {setMessage &&( <div className='validation-msg'> {message} </div> )}
        </Card>
    </div>
  )
}

=======
<<<<<<< HEAD
import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedBackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating,setRating] = useState(10)
    const [message,setMessage] = useState('')
    const [disabled,setDisabled] = useState(true)
    

    const handleTextChange =(e) => {
        if(text === '') {
            setMessage(null)
            setDisabled(true)
        } else if(text!=='' && text.trim().length <=10 ){
            setMessage("review must have more than 10 letters")
            setDisabled(true)
        } else {
            setMessage(null)
            setDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            console.log(newFeedback)
            handleAdd(newFeedback)

            setText('')
        }
    }



  return (
    <div>
        <Card>
            <form onSubmit={handleSubmit} >
                <h5>How do you rate our service?</h5>
                <RatingSelect select = {(rating) => setRating(rating)} />  {/*very important for components*/}
                <div className="input-group">
                    <input type="text" onChange={handleTextChange} value={text} />
                    <Button type='submit' isDisabled={disabled} >
                        Send
                    </Button>
                </div>
            </form>

            {setMessage &&( <div className='validation-msg'> {message} </div> )}
        </Card>
    </div>
  )
}

=======
import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedBackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating,setRating] = useState(10)
    const [message,setMessage] = useState('')
    const [disabled,setDisabled] = useState(true)
    

    const handleTextChange =(e) => {
        if(text === '') {
            setMessage(null)
            setDisabled(true)
        } else if(text!=='' && text.trim().length <=10 ){
            setMessage("review must have more than 10 letters")
            setDisabled(true)
        } else {
            setMessage(null)
            setDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            console.log(newFeedback)
            handleAdd(newFeedback)

            setText('')
        }
    }



  return (
    <div>
        <Card>
            <form onSubmit={handleSubmit} >
                <h5>How do you rate our service?</h5>
                <RatingSelect select = {(rating) => setRating(rating)} />  {/*very important for components*/}
                <div className="input-group">
                    <input type="text" onChange={handleTextChange} value={text} />
                    <Button type='submit' isDisabled={disabled} >
                        Send
                    </Button>
                </div>
            </form>

            {setMessage &&( <div className='validation-msg'> {message} </div> )}
        </Card>
    </div>
  )
}

>>>>>>> 60b54414feb6faf232c7d518adce18b5d35b312f
>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default FeedBackForm