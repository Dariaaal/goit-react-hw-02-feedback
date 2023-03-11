import React, { Component } from "react";
import css from './Feedback.module.css';

class Feedback extends Component {
    render() {
        return <div>
            <h2>Please leave feedback</h2>
                <ul>
                    <li><button type="button" className={css.button}>Good</button></li>
                    <li><button type="button" className={css.button}>Neutral</button></li>
                    <li><button type="button" className={css.button}>Bad</button></li>
                </ul>
        </div>
    }
}

export default Feedback;