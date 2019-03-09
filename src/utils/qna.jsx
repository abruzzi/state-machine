import React from 'react';
import {
  Route
} from 'react-router-dom'

import steps from '../components/Steps';
import qnas from '../qnas.json';

const makeSimple = (name) => ({ history, match }) => {
  const qna = qnas.find(qna => qna.name === name);

  return (<div>
    <p>Simple Content</p>
    {qna.content}
  </div>)
}

export {makeSimple}

const makeQNA = (name) => ({ history, match }) => {
  const qna = steps.find(step => step.name === name);

  const handler = (e) => {
    const route = qna.answers.find(a => a.value === e).route;
    history.push(`${match.path}/${route}`)
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
        qna.answers.map((answer, index) => {
          return (<Route 
            key={index} 
            path={`${match.path}/${answer.route}`}
            component={answer.next} 
            />)
        }
        )
      }
    </div>
  )
}

export default makeQNA;