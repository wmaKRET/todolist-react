import React from "react"

export default function Menu(props) {
    return (
        <div className="menu">
            <button
                className="menu__btn"
                onClick={props.clearCompleted}
            >Clear completed</button>
            <button
                className="menu__btn"
                onClick={props.deleteAll}
            >Delete all</button>
            <div className="menu__msg">
                <p id="title-oralertmessage">To-do list</p>
            </div>
            <button
                className="menu__btn"
                onClick={props.addTask}
            >
                Add task</button>
            <input
                className="menu__input"
                type="text"
                placeholder="Type here..."
                id="taskInput"
            />
            <div className="menu__counter">
                <p>{props.tasksRemaining} {props.tasksRemaining === 1 ? 'task' : 'tasks'} remaining</p>
            </div>
        </div>
    )
}