import React from 'react';
import './App.css';
import {CreateForm} from './component/create-form/create-form.component';
import {TaskList} from './component/task-list/task-list.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
      taskName: ''
    }
  }

  handleChange = e => this.state.taskName = e.target.value;

  createTask = e => {
    const {tasks, taskName} = this.state;
    if(taskName === ''){
      alert('Task name is empty');
    } else {
      for(let i=0; i<tasks.length; i++){
        if(tasks[i].name.toLowerCase() == taskName.toLowerCase()) {
          alert('Same task already exists');
          break;
        } 
        else if( i == tasks.length - 1){
            this.setState({ tasks: [...tasks, { name: taskName }] });
            let t = taskName;
            let task = {
              "name": t
            };
            fetch('http://localhost/todoapi/api/create.api.php', {
            method: 'POST',
            body: JSON.stringify(task)
            })
            .then(response => response.json())
            .then(data => console.log(data));
            e.target.parentElement.childNodes[1].value = '';
        }
      }
    }
  }

  deleteTask = e => {
    const [tasks, taskName] = [this.state.tasks, e.target.getAttribute('value')];
    let task = {
      "name": taskName
    };
    fetch('http://localhost/todoapi/api/delete.api.php', {
    method: 'DELETE',
    body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(data => console.log(data));
    let filteredTasks = tasks.filter(task=>task.name !== taskName);
    this.setState({ tasks: [...filteredTasks] });
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost/todoapi/api/read.api.php')
    .then(response=>response.json())
    .then(t => this.setState({ tasks: t }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <CreateForm 
          onChange={this.handleChange} 
          createTask={this.createTask} 
        />
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
