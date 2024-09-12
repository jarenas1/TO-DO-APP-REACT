import { useReducer } from "react"
import { todoReducer } from "./todoReduce";

//Create the initial list of todo's

const initialState = [
  { id: new Date().getTime(), description: "Learn about React", done: false },
  { id: new Date().getTime(), description: "Learn about SpringBoot", done: false },
];

export  const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState);
  return (
    <>
        <h1>ToDo App: 10, <small> Pending: 2</small></h1>
        <hr />

<div className="row">
    <div className="col-7">
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between">
                    <span className="align-self-center">Item</span>
                    <button className="btn btn-danger">Delete</button>
                </li>
                ))
            }
        </ul>
    </div>

    <div className="col-5">
        <h4>Add TODO</h4>
        <hr />
        <form action="">
            <input type="text" placeholder="Add your todo" className="form-control"/>

            <button type="submit" className="btn btn-primary mt-2">Add</button>
        </form>
    </div>

</div>
     
    </>
  )
}


