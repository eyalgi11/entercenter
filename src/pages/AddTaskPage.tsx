import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type AddTaskPageProps = {
  onAddTask: (title: string, details: string) => void
}

export function AddTaskPage({ onAddTask }: AddTaskPageProps) {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedDetails = details.trim()

    if (!trimmedTitle) {
      setError('Task name is required.')
      return
    }

    onAddTask(trimmedTitle, trimmedDetails)
    navigate('/')
  }

  return (
    <main className="page-shell">
      <section className="form-panel">
        <div className="form-header">
          <Link className="back-link" to="/">
            Back to tasks
          </Link>
          <p className="eyebrow">Add task</p>
          <h1>New Task</h1>
          <p className="form-copy">
            Keep it short and actionable. Add a category or note if it helps.
          </p>
        </div>

        <form className="task-form" onSubmit={handleSubmit}>
          <label className="field" htmlFor="task-title">
            <span>Task name</span>
            <input
              id="task-title"
              maxLength={80}
              name="task-title"
              onChange={(event) => {
                setTitle(event.target.value)
                if (error) {
                  setError('')
                }
              }}
              placeholder="Finish the marketing presentation"
              required
              type="text"
              value={title}
            />
          </label>

          <label className="field" htmlFor="task-details">
            <span>Description or category</span>
            <textarea
              id="task-details"
              maxLength={140}
              name="task-details"
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Work, personal, or a quick note"
              rows={4}
              value={details}
            />
          </label>

          {error ? (
            <p className="form-error" role="alert">
              {error}
            </p>
          ) : null}

          <div className="form-footer">
            <div className="field-meta" aria-hidden="true">
              <span>{title.trim().length}/80</span>
              <span>{details.trim().length}/140</span>
            </div>

            <button className="submit-button" type="submit">
              Save task
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
