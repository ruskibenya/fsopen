import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1> {props.course} </h1>
    )
}

const Part = (props) => {
  return (
    <p> {props.part} {props.exercise} </p>
  )
}

const Content = (props) => {
  return (
    props.array.map((pair)=> {
     return (<Part part={pair[0]} exercise={pair[1]} />)
    })
  )
}

const Total = (props) => {
  return (
  <p> Number of exercises {props.sum} </p>
  )
}

const App = () => {
  // const definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const array = [[part1, exercises1], [part2, exercises2], [part3, exercises3]]


  // Refactor the code so that it consists of three new components:
  // Header, Content, and Total. All data still resides in the App component
  return (
    <div>
      <Header course={course} />
      <Content array={array} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
