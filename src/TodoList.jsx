import { TodoItem } from "./TodoItem"

export const TodoList = ({todos}) => {

  return (
    <>
           <ul className="list-group">
            {
                todos.map((todo) => (
                    //TODOITEM
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            }
        </ul>
    </>
  )
}
