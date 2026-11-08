import React from 'react'

const Filter = ({SetFilter}) => {
    const HandleAll=()=>{
        SetFilter('All')
    }
    const HandleActive=()=>{
        SetFilter('Active')
    }
    const HandleComplete=()=>{
        SetFilter('Completed')
    }
  return (
    <div>
      <button onClick={HandleAll}>All</button>
      <button onClick={HandleActive}>Active</button>
      <button onClick={HandleComplete}>Complete</button>
    </div>
  )
}

export default Filter
