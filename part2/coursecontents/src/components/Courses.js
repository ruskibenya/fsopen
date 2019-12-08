import React from 'react'
import Course from './Course'


const Total = ({course}) => {
    let total = 0
    course.parts.map((part)=> total = total + parseInt(part.exercises)) 
    return (
        <h5>total of {total} exercises</h5>
    )
  }

const Courses = ({courses}) => {
    return(
        courses.map((course)=> {
            return (
              <div key={course.id}>
                <Course course={course}  />
                <Total course={course}/>
              </div>  
            )
        })

    )
}

export default Courses