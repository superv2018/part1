import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({course}) => {
console.log(course)
  return(
    <>
    <p>{course.name}</p>
    </>
  )
}

const Content = (props) => {
console.log(props)
  return(
    <>
  <Parts parts={props.parts} />
    </>
  )
}

const Parts = (props) => {
  return (
    <>
    <p>{props.parts.parts[0].name}: {props.parts.parts[0].exercises}</p>
    <p>{props.parts.parts[1].name}: {props.parts.parts[1].exercises}</p>
    <p>{props.parts.parts[2].name}: {props.parts.parts[2].exercises}</p>
    </>
  )
}

const Total = ({total}) => {

  return(
    <>
    <p>Number of exercises: {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>
    </>
  )
}



const App = () => {

  const course = {
   name: 'Half Stack application development',
   parts: [
  {
   name: 'Fundamentals of React',
   exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7 
  },
  {
    name: 'State of a component', 
    exercises: 14 
  }
]
} 

  return (
    <div>
  <Header course={course}/>
  <Content parts={course}/>
  <Total total={course}/>
    </div>
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

