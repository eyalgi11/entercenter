import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { AddTaskPage } from './pages/AddTaskPage'
import { TaskListPage } from './pages/TaskListPage'
import { createTask, loadTasks, saveTasks } from './tasks'
import type { Task } from './types'

function MyDayApp() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks())

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const handleToggleTask = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const handleAddTask = (title: string, details: string) => {
    const nextTask = createTask(title, details)
    setTasks((currentTasks) => [nextTask, ...currentTasks])
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    )
  }

  return (
    <div className="app-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />
      <Routes>
        <Route
          path="/"
          element={
            <TaskListPage
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onToggleTask={handleToggleTask}
            />
          }
        />
        <Route path="/add" element={<AddTaskPage onAddTask={handleAddTask} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <MyDayApp />
    </BrowserRouter>
  )
}
