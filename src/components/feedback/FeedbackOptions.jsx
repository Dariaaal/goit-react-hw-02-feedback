import React from "react";
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
          {options.map(option => (
            <button
              type="button"
              className={css.button}
              onClick={onLeaveFeedback}
              key={option}
              name={option}
            >
              {option}
            </button>
          ))}
      </div>
    );
  };

// const FeedbackOptions = ({options, onLeaveFeedback}) => {
//     return <div>
//                  <ul>
//                      {options.map((option)=>(
//                         <li key={nanoid()}><button type="button" className={css.button} 
//                         onClick={onLeaveFeedback}>{option}</button></li>
//                      ))}
//                  </ul>
//             </div>
// }

export default FeedbackOptions;