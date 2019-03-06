import React from 'react';

import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'

const makeQNA = (qna) => ({history, match}) => {
    const handler = (e) => {
      history.push(`${match.path}/${e}`)
    }
  
    return (
      <div>
        <h2>{qna.question}</h2>
        <ul>
          {qna.answers.map((answer, index) => <li key={index} onClick={() => handler(answer.value)}>{answer.label}</li>)}
        </ul>
        {
          qna.answers.map((answer, index) => <Route key={index} path={`${match.path}/${answer.value}`} component={answer.next}/>)
        }
      </div>
    )
  }
  
export default makeQNA;