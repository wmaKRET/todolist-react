import React from "react"

export default function Menu() {
    function addTask(){
        console.log('add')
      }
    
      function clearCompleted(){
        console.log('clear')
      }
    
      function deleteAll(){
        console.log('delete')
      }

    return (
        <div className="menu">
            <button
                className="menu__btn"
                onClick={clearCompleted}
            >Clear completed</button>
            <button
                className="menu__btn"
                onClick={deleteAll}
            >Delete all</button>
            <div className="menu__msg">
                <p>To-do list</p>
            </div>
            <button
                className="menu__btn"
                onClick={addTask}
            >
                Add task</button>
            <input
                className="menu__input"
                type="text"
                placeholder="Type here..."
                name="taskInput"
            //value
            //onChange
            />
            <div className="menu__counter">
                <p>0 tasks remaining</p>
            </div>
        </div>
    )
}