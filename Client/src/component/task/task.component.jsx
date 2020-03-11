import React from 'react';
import './task.styles.css';

export const Task = ({task, deleteTask})=>{
    return (
        <div className="task">
            <p>{task.name}</p>
            <span className="delete" value={task.name} onClick={deleteTask}>+</span>
        </div>
    )
}