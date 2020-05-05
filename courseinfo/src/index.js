import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {

  return(
    <>
    <p>{props.course}</p>
    </>
  )
}

const Content = (props) => {

  return(
    <>
  <Part part1 = {props.part1}  exercises1 = {props.exercises1}/>
  <Part part1 = {props.part2}  exercises1 = {props.exercises2}/>
  <Part part1 = {props.part3}  exercises1 = {props.exercises3}/>
    </>
  )
}
const Total = (props) => {

  return(
    <>
    <p>Number of exercises {props.total}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.part1}  {props.exercises1}</p>
    <p>{props.part2}  {props.exercises2}</p>
    <p>{props.part3}  {props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
  <Header course={course}/>
  <Content part1 = {part1}
           part2 = {part2}
           part3 = {part3}
           exercises1 = {exercises1}
           exercises2 = {exercises2}
           exercises3 = {exercises3}
  />
  <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

