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
    props.array.map((obj, index)=> {
     return (<Part key={index} part={obj.name} exercise={obj.exercises} />)
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
  


  // Refactor the code so that it consists of three new components:
  // Header, Content, and Total. All data still resides in the App component
  return (
    <div>
      <Header course={course.name} />
      <Content array={course.parts} />
      <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
