import React from 'react';
import './create-form.styles.css';
export const CreateForm = ({onChange, createTask})=>{
    return (
        <div className="form">
            <label htmlFor="taskName">Task Name</label>
            <input type="text" id="taskName" onChange={onChange}/>
            <input type="button" value="Create" onClick={createTask} />
        </div>
    );
}