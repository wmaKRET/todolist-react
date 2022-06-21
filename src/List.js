import React from "react"
import Task from "./Task"

export default function List(props) {
    const taskElements = props.tasks.map(task => (
        <Task 
            key={task.id}
            value={task.value}
            isCompleted={task.isCompleted}
            completeTask={() => props.completeTask(task.id)}
            deleteTask={() => props.deleteTask(task.id)}
        />
    ))

    return (
        <div className="list">
            {taskElements}
        </div>
    )
}
