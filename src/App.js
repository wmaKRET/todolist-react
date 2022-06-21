import React from "react"
import "./main.css"
import Menu from "./Menu"
import List from "./List"

function App() {
  const [tasks, setTasks] = React.useState(getLocalStorageTasks())
  const [tasksLeft, setTasksLeft] = React.useState(0)

  React.useEffect(() => {
    setTasksLeft(tasks.filter(task => !task.isCompleted).length)
    localStorage.setItem('todolist-react', JSON.stringify(tasks))
  }, [tasks])

  function getLocalStorageTasks(){
    return localStorage.getItem('todolist-react')
        ? JSON.parse(localStorage.getItem('todolist-react'))
        : []
  }

  function createTask(inputValue){
    return {
      id: Date.now().toString(),
      value: inputValue,
      isCompleted: false
    }
  }

  function displayMessage(message, action){
    const alertMessage = document.getElementById('title-oralertmessage')
    const inputText = document.getElementById('taskInput')
    alertMessage.textContent = message
    alertMessage.classList.add(action)
    inputText.disabled = true
    setTimeout(() => {
      alertMessage.textContent = 'To-do list'
      alertMessage.classList.remove(action)
      inputText.disabled = false
    }, 1000)
  }

  function addTask(){
    const inputText = document.getElementById('taskInput')
    if (!inputText.value) {
      displayMessage('Please enter any value.', 'action-failure')
      return
    }
    if (inputText.value.length > 60) {
      displayMessage('The task is too long! (Max 60 letters)', 'action-failure')
      setTimeout(() => inputText.value = '', 0)
      return
    }
    setTasks(prevTasks => [...prevTasks, createTask(inputText.value)])
    displayMessage('Task added!', 'action-success')
    setTimeout(() => inputText.value = '', 0)
  }

  function clearCompleted(){
    if (!tasks.length) {
      displayMessage('There are no completed tasks.', 'action-failure')
      return
    }
    setTasks(prevTasks => prevTasks.filter(task => !task.isCompleted))
    displayMessage('Completed tasks has been deleted.', 'action-success')
  }

  function deleteAll(){
    if (!tasks.length) {
      displayMessage('There are no tasks to delete.', 'action-failure')
      return
    }
    setTasks([])
    displayMessage('All tasks has been deleted.', 'action-success')
  }

  function deleteTask(id){
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  function completeTask(id){
    setTasks(prevTasks => prevTasks.map(task => {
      return task.id === id
          ? {...task, isCompleted: !task.isCompleted}
          : task
    }))
  }

  return (
    <div className="container">
      <Menu 
        tasksRemaining={tasksLeft}
        addTask={addTask}
        clearCompleted={clearCompleted}
        deleteAll={deleteAll}
      />
      <List 
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  )
}

export default App
