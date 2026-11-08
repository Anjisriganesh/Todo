import React, { useState } from 'react'
import Filter from './Componenets/Filter'

const App = () => {
  const[input,setInput]=useState('')
  const[data,setData]=useState([])
  const[filter,setFilter]=useState('All')
  const HandleAdd=()=>{
    setData(prev=>{
      return [...prev,
        {
          id:Date.now(),
          title:input.trim(),
          completed:false
        }
      ]
    })
    setInput("")
  }
  const HandleComplete=(id)=>{
    setData(prev=>{
      return prev.map(item=>item.id===id?{...item,completed:!item.completed}:item)
    })
  }
  const HandleDelete=(id)=>{
    setData(prev=>{
      return prev.filter(item=>item.id!==id)
    })
  }
  const filteredData=data.filter((item)=>{
    if(filter==='Active'){
      return !item.completed
    }
    if(filter==='Completed'){
      return item.completed
    }
    return true
  })
  const active=data.filter(item=>!item.completed).length
  return (
    <div>
      <input type='text' placeholder='Enter a task' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={HandleAdd}>Add</button>
      <div>
        <Filter SetFilter={setFilter}/>
      </div>
      <div>
        <ul>
          {filteredData.map((item,index)=>{
            return(
              <li key={index}>
                <p style={{textDecoration:item.completed?'line-through':'none'}}>{item.title}</p>
                <button onClick={()=>HandleComplete(item.id)}>Complete</button>
                <button onClick={()=>HandleDelete(item.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
        <p>All:{data.length} || Active:{active}</p>
      </div>
    </div>
  )
}

export default App
