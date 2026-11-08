import React, { useState } from 'react'

const App = () => {
  const[input,setInput]=useState('')
  const[data,setData]=useState([])
  const[filter,setFilter]=useState('All')
  const HandleInput=(e)=>{
    setInput(e.target.value)
  }
  const Handleadd=()=>{
    if(input.trim()===""){
      alert('please Enter task')
      return
    }
    
    setData(prev=>{
      return [
        ...prev,
        {
        id:Date.now(),
        completed:false,
        title:input.trim()
        }
      ]
    })
    setInput("")
  }
  function HandleComplete(id){
    setData(prev=>{
     return prev.map(item=>item.id===id?{...item,completed:!item.completed}:item)
    })
  }
  function HandleRemove(id){
    setData(prev=>{
      return prev.filter(item=>item.id!==id)
    })
  }
  function HandleAll(){
    setFilter('All')
  }
  function HandleActive(){
    setFilter('Active')
  }
  function HandleCompleted(){
    setFilter('Completed')
  }
  const filteredData = data.filter(item => {
  if (filter === 'Active') {
    return !item.completed;
  }
  if (filter === 'Completed') {
    return item.completed;
  }
  return true;
});
const completed=data.filter(item=>!item.completed).length
  return (
    <div>
      <input type='text' required placeholder='Enter a task' value={input} onChange={HandleInput}/>
      <button onClick={Handleadd}>Add</button>
      <div>
      <button onClick={HandleAll}>All</button>
      <button onClick={HandleActive}>Active</button>
      <button onClick={HandleCompleted}>Completed</button>
      </div>
      <ul>
        {filteredData.map((item,index)=>{
          return(
            <li key={index}>
              <p style={{textDecoration:item.completed?'line-through':'none'}}>{item.title}</p>
              <button onClick={()=>HandleComplete(item.id)}>Complete</button>
              <button onClick={()=>HandleRemove(item.id)}>Remove</button>
            </li>
          )
        })}
        
      </ul>
      <p>All:{data.length} || Active:{completed}</p>
    </div>
  )
}

export default App
