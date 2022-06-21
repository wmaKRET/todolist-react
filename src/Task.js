import React from "react"

export default function Task(props) {
    return (
        <div 
            className={props.isCompleted
                        ? "list__task list__task-isdone"
                        : "list__task"
                    }
            onClick={props.completeTask}
        >
            <p>{props.value}</p>
            <div 
                className={props.isCompleted
                    ? "list__task-delete-btn list__task-delete-btn-isdone"
                    : "list__task-delete-btn"
                }
                onClick={props.deleteTask}
            >
                <span></span>
                <span></span>
            </div>
        </div>
    )
}