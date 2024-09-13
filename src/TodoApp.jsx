import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReduce";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const initialState = [
//   { id: new Date().getTime(), description: "Learn about React", done: false },
//   { id: new Date().getTime(), description: "Learn about SpringBoot", done: false },
//TRAEREMOS LA DATA DESDE EL LOCAL STORAGE
];

const init = () =>{
    return JSON.parse(localStorage.getItem("todos")) || []; //pasa lo del local storage a objetc, si no encientra nada crea un array vacio
}

export  const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init); //init es el valor inicial PARA EVIRAR QUE AL RECARGARSE SE PIERFA LO DEL LOCAL STORAGE

    //AÑADIMOS TODOS AL LOCAL STORAGE
    useEffect(()=>{
        //AL GUARDAR EL ESTADO ACTUAL EN EL LOCAL STORAGE
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos]) //cada que los todos cambien se lanza


    const handleNewTodo = (todo) =>{
        //CREAMOS LA ACCION PARA EL REDUCE, ESTA SE SETEO DE EL REDUCER
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }

        //SETEAMOS ESTA ACCION EN EL REDUCE
        dispatchTodo(action);
        
    };
  return (
    <>
        <h1>ToDo App: 10, <small> Pending: 2</small></h1>
        <hr />

<div className="row">
    <div className="col-7">
        {/*TODOLIST */}
        <TodoList todos = {todos}/>
    </div>

    <div className="col-5">
        {/*TODOADD ON NEW TODO(UN TO D<O)*/}
        <h4>Add TODO</h4>
        <hr />
        <TodoAdd onNewTodo={(event) => handleNewTodo(event)}/>
    </div>

</div>
     
    </>
  )
}


