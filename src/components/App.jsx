import React, { Component } from "react";
import Statistics from "./feedback/Statistics";
import FeedbackOptions from "./feedback/FeedbackOptions";
import Section from "./feedback/Section";
import Notification from "./feedback/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleIncrement = (e) => {
    const {name} = e.target
     this.setState((prevState)=>({
       [name]: prevState[name] + 1,
     }))
  }

  // countTotalFeedback = () => {
  //   const values = Object.values(this.state);
  //   return values.reduce((total, value) => total+value);
  // }

  // countPositiveFeedbackPercentage = () => {

  // }

  render(){
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = +Math.round((good/total)*100);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      > 
      <Section title='Please leave feedback'>
        <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.handleIncrement}/>
      </Section>
      <Section title='Statistics'>
        {good===0 && neutral===0 && bad===0?(<Notification message="There is no feedback"></Notification>):(        
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={total}
        positiveFeedback = {positiveFeedback}
        />)}

      </Section>
      </div>
    );
  }
}