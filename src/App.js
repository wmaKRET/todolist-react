import React from "react"
import "./main.css"
import Menu from "./Menu"
import List from "./List"

function App() {
  const [tasks, setTasks] = React.useState(testTasks())

  function testTasks(){
    return [
      {
        id: Date.now().toString() + 1,
        value: 'task 1',
        isCompleted: false
      },
      {
        id: Date.now().toString() + 2,
        value: 'task 2',
        isCompleted: true
      }
    ]
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
    alertMessage.textContent = message
    alertMessage.classList.add(action)
    setTimeout(() => {
      alertMessage.textContent = 'To-do list'
      alertMessage.classList.remove(action)
    }, 1500)
  }

  function addTask(){
    const inputText = document.getElementById('taskInput')
    if (!inputText.value) {
      displayMessage('Please enter any value.', 'action-failure')
      return
    }
    setTasks(prevTasks => [...prevTasks, createTask(inputText.value)])
    displayMessage('Task added!', 'action-success')
    inputText.value = ''
  }

  function clearCompleted(){
    console.log('clear')
  }

  function deleteAll(){
    setTasks([])
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
        tasksRemaining={tasks.length}
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
