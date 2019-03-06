import React from 'react';

import {
  Route
} from 'react-router-dom'

const makeQNA = (qna) => ({ history, match }) => {
  const handler = (e) => {
    history.push(`${match.path}/${e}`)
  }

  return (
    <div>
      <p>{qna.question}</p>
      {
        qna.answers.map((answer, index) => {
          return (<div key={index}>
            <input type="radio" id={`${qna.name}-${index}`} name={`${qna.name}`} value={answer.value} onClick={() => handler(answer.value)} />
            <label htmlFor={`${qna.name}-${index}`}>{answer.label}</label>
          </div>)
        })
      }
      {
        qna.answers.map((answer, index) => <Route key={index} path={`${match.path}/${answer.value}`} component={answer.next} />)
      }
    </div>
  )
}

export default makeQNA;