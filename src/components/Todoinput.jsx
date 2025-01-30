import React, {useState} from 'react'


export default function Todoinput(props){
    const {handleAddTodo, todoValue, setTodoValue}=props
    //const [todoValue, setTodoValue]=React.useState('')

    return(
        <header>
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder='Input To-Do....'></input>
            <button onClick={()=>{
                handleAddTodo(todoValue)
                setTodoValue('')//clearing the input field after adding the todo
            }
                }>
                ADD</button>
        </header>
    )
}