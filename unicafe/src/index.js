import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Statistics = ({good, neutral, bad}) => {
  
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
     <h3>Statistics</h3>
     <table>
       <tbody>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad} />
      <Statistic text='All' value={good + neutral + bad} />
      <Statistic text='average' value={(((good * 1) + (neutral * 0) + (bad * -1)) / Number(good + neutral + bad)).toFixed(2) }/>
      <Statistic text='positive' value= {(good / (good + neutral + bad)) * 100 + '%'} />
      </tbody>
      </table>
    </div>
  )
}


const Statistic = (props) => {

  console.log(props)
  return (
    <>
      <tr>
      <td>{props.text}</td>
      <td>{props.value}</td> 
      </tr>
    </>
  )
}


const Button = ({onClick, text}) => (
<button onClick={onClick}>{text}</button>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  

  
  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={handleGoodClick} 
      text='good'/>
       <Button onClick={handleNeutralClick} 
      text='neutral'/>
       <Button onClick={handleBadClick} 
      text='bad'/>

      <Statistics 
       good={good}
       neutral={neutral}
       bad={bad}
      />
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


