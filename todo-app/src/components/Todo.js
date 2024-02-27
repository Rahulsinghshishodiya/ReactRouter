import { useState } from 'react'
import './Todo.css'
function Todo() {
    const [todos, setTodos] = useState([
        { title: "Item 1", isCompleted: true },
        { title: "Item 2", isCompleted: false },
        { title: "Item 3", isCompleted: true },
        { title: "Item 4", isCompleted: false },
    ]);
    //2way
    // const todos = [Item 1,Item 2, Item 3, Item 4,] 
      
     const [newTodo, setNewTodo] = useState("");
     const handleNewTodoChange = (e) => {
        setNewTodo(e.target.value);
     }
     const handleTodoSubmit = (e) =>{
        e.preventDefault();
        //add new todo to todo list

        setTodos([...todos,{title: newTodo}]);
        setNewTodo("");
     };
     const handleCompletion = (e) => {
        const currentTodoIndex = Number(e.target.dataset.id);
        const updatedTodoStatus =e.target.checked;
       // Replace a item in list by changing the iscomp status
       const newTodosList = [...todos];
       const newUpdatedTodo = {...newTodosList[currentTodoIndex]};
       newUpdatedTodo.isCompleted = updatedTodoStatus;
       newTodosList.splice(currentTodoIndex, 1, newUpdatedTodo);
       setTodos(newTodosList);
     }
    return (
    
            <div className="todo-wraper">
                <h1> TODO APP</h1>
                <div className="todo-form">
                    <form>
                      <input type='text' placeholder='Enter new todo...' value={newTodo} onChange={handleNewTodoChange}/>
                       <button onClick={handleTodoSubmit}>Add</button>
                   </form>
                </div>
                <div className="todo-list">

                    {
                        todos.map((todo, idx) => (
                            <div className="todo-item">
                                <input type="checkbox" data-id={idx} checked={todo.isCompleted} onChange={handleCompletion}/>
                            <span className={todo.isCompleted ? "completed" : ""}>
                              
                              {" "}
                              {todo.title}{" "}
                            </span>
                            </div>
                        ))
                    }

                </div>
            </div>
    

    );
}

export default Todo;