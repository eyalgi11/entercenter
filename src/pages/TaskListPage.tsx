import { Link } from 'react-router-dom'
import type { Task } from '../types'

type TaskListPageProps = {
  tasks: Task[]
  onDeleteTask: (taskId: string) => void
  onToggleTask: (taskId: string) => void
}

function formatTaskState(task: Task) {
  return task.completed ? 'Completed' : 'Active'
}

export function TaskListPage({
  tasks,
  onDeleteTask,
  onToggleTask,
}: TaskListPageProps) {
  const completedTasks = tasks.filter((task) => task.completed).length
  const pendingTasks = tasks.length - completedTasks
  const todayLabel = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date())

  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-topline">
          <div>
            <p className="eyebrow">My Day</p>
            <h1>MyDay</h1>
          </div>
          <span className="day-chip">{todayLabel}</span>
        </div>

        <div className="hero-summary">
          <p className="hero-copy">
            {pendingTasks === 0
              ? 'Everything is done for today.'
              : `${pendingTasks} task${pendingTasks === 1 ? '' : 's'} remaining for today.`}
          </p>
          <Link className="primary-link" to="/add">
            Add task
          </Link>
        </div>

        <div className="hero-grid" aria-label="Task summary">
          <article className="hero-stat">
            <span>Inbox</span>
            <strong>{tasks.length}</strong>
          </article>
          <article className="hero-stat">
            <span>Open</span>
            <strong>{pendingTasks}</strong>
          </article>
          <article className="hero-stat">
            <span>Completed</span>
            <strong>{completedTasks}</strong>
          </article>
        </div>
      </section>

      <section className="list-panel" aria-labelledby="task-list-heading">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Today</p>
            <h2 id="task-list-heading">Tasks</h2>
          </div>
          <p className="section-copy">
            Mark tasks complete as you go.
          </p>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-state">
            <p className="empty-kicker">Nothing scheduled</p>
            <h3>Add your first task</h3>
            <p>Your list will appear here as soon as you create one.</p>
            <Link className="secondary-link" to="/add">
              Create task
            </Link>
          </div>
        ) : (
          <div className="task-list">
            {tasks.map((task) => (
              <article
                className={`task-card${task.completed ? ' task-card-complete' : ''}`}
                key={task.id}
              >
                <button
                  aria-label={
                    task.completed
                      ? `Mark ${task.title} as not completed`
                      : `Mark ${task.title} as completed`
                  }
                  aria-pressed={task.completed}
                  className="task-toggle"
                  onClick={() => onToggleTask(task.id)}
                  type="button"
                >
                  <span className="task-toggle-mark" aria-hidden="true">
                    {task.completed ? '✓' : ''}
                  </span>
                </button>

                <div className="task-copy-block">
                  <h3>{task.title}</h3>
                  <div className="task-meta-row">
                    {task.details ? (
                      <span className="task-tag">{task.details}</span>
                    ) : null}
                    <span className="task-status">{formatTaskState(task)}</span>
                    <span className="task-time">
                      Added {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <button
                  aria-label={`Delete ${task.title}`}
                  className="task-delete"
                  onClick={() => onDeleteTask(task.id)}
                  type="button"
                >
                  Delete
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      <Link aria-label="Add a new task" className="floating-link" to="/add">
        +
      </Link>
    </main>
  )
}
