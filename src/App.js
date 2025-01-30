import logo from './logo.svg';
import './index.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';
import Todocard from './components/Todocard';
import { useState, useEffect } from 'react';
import React from 'react'

//the above imports are needed cuz there is a sub-folder
// let todos=[
//   'Go to College',
//   'do LeetCode',
//   'exercise'
// ]




function App() {
  const [todos, setTodos]=useState([ 
    
  ])
  const [todoValue, setTodoValue]=React.useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodo(newTodo){
    const newTodoList=[...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
    
  }
  function handleDelete(index){
    const newTodoList=todos.filter((todos, todoindex)=>
      {return todoindex !==index})

    persistData(newTodoList)
    

    setTodos(newTodoList)
    
  }

  function handleEdit(index){
    const newVal=todos[index]
    setTodoValue(newVal) 
    handleDelete(index)
    
  }

  useEffect(()=>{
    if (!localStorage){
      return
    }
  let localTodos=localStorage.getItem('todos')
  if (!localTodos){
    return
    
  }
  localTodos=(JSON.parse(localTodos).todos)
  setTodos(localTodos )
}, [])


  return (
    <>
      
      <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo}/>
      <Todolist handleDelete={handleDelete} handleEdit={handleEdit} todos={todos}/>
      
    </>
  );
}

export default App;
