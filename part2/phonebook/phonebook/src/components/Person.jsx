import React from 'react'

const Person = ({person}) => {
    return (
        <div>
            {person.name} <span> </span>
            {person.number}
        </div>
    )
}

export default Person