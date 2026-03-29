import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'
import { STORAGE_KEY } from './tasks'

describe('MyDay app', () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.history.pushState({}, '', '/')
  })

  it('renders the seeded task list on the main screen', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'MyDay' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Finish the assignment demo notes' }),
    ).toBeInTheDocument()
  })

  it('adds a new task and persists it to localStorage', async () => {
    window.history.pushState({}, '', '/add')
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByLabelText('Task name'), 'Plan the demo recording')
    await user.type(
      screen.getByLabelText('Description or category'),
      'Presentation prep',
    )
    await user.click(screen.getByRole('button', { name: 'Save task' }))

    expect(
      await screen.findByRole('heading', { name: 'Plan the demo recording' }),
    ).toBeInTheDocument()

    const storedTasks = window.localStorage.getItem(STORAGE_KEY)
    expect(storedTasks).toContain('Plan the demo recording')
    expect(storedTasks).toContain('Presentation prep')
  })

  it('toggles a task completion state', async () => {
    const user = userEvent.setup()

    render(<App />)

    const toggleButton = screen.getByRole('button', {
      name: 'Mark Finish the assignment demo notes as completed',
    })

    await user.click(toggleButton)

    expect(toggleButton).toHaveAttribute('aria-pressed', 'true')
    expect(
      screen.getByRole('button', {
        name: 'Mark Finish the assignment demo notes as not completed',
      }),
    ).toBeInTheDocument()
  })

  it('deletes a task from the list and persistence layer', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(
      screen.getByRole('button', {
        name: 'Delete Send the project link',
      }),
    )

    expect(
      screen.queryByRole('heading', { name: 'Send the project link' }),
    ).not.toBeInTheDocument()

    const storedTasks = window.localStorage.getItem(STORAGE_KEY)
    expect(storedTasks).not.toContain('Send the project link')
  })
})
