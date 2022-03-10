import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedBackItem from "./FeedBackItem"
import FeedbackContext from '../Context/FeedbackContext'

function FeedBackList() {
    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>

    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                key={item.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                >
                    <FeedBackItem key={item.id} item={item} />
                </motion.div>
            ))}
            </AnimatePresence>
            
            </div>
      )

//   return (
//     <div className='feedback-list'>
//         {feedback.map((item) => (
//             <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
//         ))}
        
//         </div>
//   )
}

export default FeedBackList