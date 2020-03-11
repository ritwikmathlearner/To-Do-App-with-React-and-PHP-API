import React, { Component } from 'react';
import {Task} from '../task/task.component';
import './task-list.styles.css';

export const TaskList= ({tasks, deleteTask})=> {
    return (
            <div className="tasks">
                {
                tasks.map((task, index)=>
                (
                    <Task key={index} task={task} deleteTask={deleteTask} />
                ))
                }
            </div>
    )
}