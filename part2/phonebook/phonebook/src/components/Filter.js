import React from 'react'

const Filter = (props) => {
    return (
      <div>
        Filter contacts by.. <span> </span>
        <input onChange={props.handleFilterChange} />
      </div>
    );
}

export default Filter