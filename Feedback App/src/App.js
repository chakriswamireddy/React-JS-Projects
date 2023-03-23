import Header from './Header'
import FeedbackList from './FeedbackList';
import FeedbackData from './FeedbackData'
import { useState } from 'react';
import FeedBackStats from './FeedBackStats';
import FeedBackForm from './FeedBackForm';

import { v4 as uuidv4 } from 'uuid';


function App() {

  const [feedback,setFeedback] = useState(FeedbackData)

  const deleteFeedback =(id) => {
    if(window.confirm("Are U Sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !==  id))
    }
  }

  const addFeedback =(newFeedback) =>{
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
  }

  return (
    <div className="App">
      <Header />
      
      <div className='feedback-items'>
        <FeedBackForm handleAdd={addFeedback}/>
        <FeedBackStats  feedback ={feedback} />
        <FeedbackList feedback={ feedback } handleDelete={deleteFeedback} />
      </div>
      
    </div>
  );
}

export default App;
