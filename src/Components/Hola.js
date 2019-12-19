import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../actions/todoActions';



const Hola = () =>{
  const [texto, setTexto] = useState('test')
  const todo = useSelector(state=>state.todoReducer.todo)
  const dispatch = useDispatch();
  
const add= () =>{
  dispatch(addItem(texto))
  console.log(texto);
}  
  
  
  console.log(todo);
  
  const onChangeText = (ev) =>{
    setTexto(ev.target.value)
  }
  
  
  const items = todo.map((item)=>{
    return (<label>{item}</label>)
  })
  return(
    
    <div>
    
      {items}
      <input type="text" onChange={onChangeText}/>
      <button onClick={add}>test</button>
    </div>
  )
}

export default Hola;