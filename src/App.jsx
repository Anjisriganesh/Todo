import React, { useState } from 'react'
import Filter from './Componenets/Filter'
import './App.css'

const App = () => {
  const[input,setInput]=useState('')
  const[data,setData]=useState([])
  const[filter,setFilter]=useState('All')
  const HandleAdd=()=>{
    if(input.trim()===""){
        return alert("Enter a task")
      }
    setData(prev=>{
      return [
        ...prev,
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
  const filteredData=data.filter(item=>{
    if(filter==='Active'){
      return !item.completed
    }
    if(filter==='Completed'){
      return item.completed
    }
    return true
  })
  return (
    <div className='t'>
      <input type='text' placeholder='Enter a task' value={input}
      onChange={(e)=>setInput(e.target.value)}/>
      <button id='add' onClick={HandleAdd}>Add</button>
      <div id='filter'>
        <Filter SetFilter={setFilter}/>
      </div>
      <div className='items'>
        <ul>
          {filteredData.map((item,index)=>{
            return(
              <li key={index} className='item'>
                <input type='checkbox' checked={item.completed} onChange={()=>HandleComplete(item.id)}/>
                <p style={{textDecoration:item.completed?'line-through':''}}>{item.title}</p>
                <button id='D' onClick={()=>HandleDelete(item.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
