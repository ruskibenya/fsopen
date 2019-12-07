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
              <div>
                <Course course={course} key={course.id} />
                <Total course={course} key={course.id + 1}/>
              </div>  
            )
        })

    )
}

export default Courses