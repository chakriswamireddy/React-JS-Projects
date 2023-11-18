import React from 'react'
import FeedBackItem from './FeedBackItem'

import {AnimatePresence,motion} from 'framer-motion'

function FeedbackList({feedback,handleDelete}) {
    if (!feedback || feedback.length === 0) {
        return <h6>Data is Not Available</h6>
    }
    return (
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
            key={item.id}
            initial = {{opacity:0}}
            animate = {{ opacity:1 }}
            // exit = {{ opacity:1 }}
            >
              <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
            </motion.div>
          ))}
          </AnimatePresence>
      </div>
    );


  // return (
  //   <div className='feedback-list'>
  //       {feedback.map((item) => (
  //           <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
  //       ))}
  //   </div>
  // );
}

export default FeedbackList;