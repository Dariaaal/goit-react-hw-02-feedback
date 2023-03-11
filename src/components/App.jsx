import React, { Component } from "react";
import Statistics from "./feedback/Statistics";
import Feedback from "./feedback/Feedback";

export const App = () => {
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
      <Feedback/>
      <Statistics/>
    </div>
  );
};
