import React from "react"

export default function Task(props) {
    return (
        <div 
            className={props.isCompleted
                        ? "list__task list__task-isdone"
                        : "list__task"
                    }
            onClick={props.deleteTask}
        >
            <p>{props.value}</p>
            <div className="list__task-delete-btn">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}