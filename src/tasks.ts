import type { Task } from './types'

const STORAGE_KEY = 'myday.tasks.v1'

const starterTasks: Task[] = [
  {
    id: 'starter-1',
    title: 'Finish the assignment demo notes',
    details: 'Work',
    completed: false,
    createdAt: '2026-03-29T08:00:00.000Z',
  },
  {
    id: 'starter-2',
    title: 'Send the project link',
    details: 'Delivery',
    completed: false,
    createdAt: '2026-03-28T08:00:00.000Z',
  },
  {
    id: 'starter-3',
    title: 'Review the task list one last time',
    details: 'Wrap-up',
    completed: true,
    createdAt: '2026-03-27T08:00:00.000Z',
  },
]

function cloneTasks(tasks: Task[]) {
  return tasks.map((task) => ({ ...task }))
}

function normalizeTask(value: unknown): Task | null {
  if (!value || typeof value !== 'object') {
    return null
  }

  const task = value as Partial<Task>

  if (
    typeof task.id !== 'string' ||
    typeof task.title !== 'string' ||
    typeof task.details !== 'string' ||
    typeof task.completed !== 'boolean' ||
    typeof task.createdAt !== 'string'
  ) {
    return null
  }

  return {
    id: task.id,
    title: task.title,
    details: task.details,
    completed: task.completed,
    createdAt: task.createdAt,
  }
}

export function loadTasks(): Task[] {
  if (typeof window === 'undefined') {
    return cloneTasks(starterTasks)
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY)

    if (!storedValue) {
      return cloneTasks(starterTasks)
    }

    const parsedValue = JSON.parse(storedValue)

    if (!Array.isArray(parsedValue)) {
      return cloneTasks(starterTasks)
    }

    const normalizedTasks = parsedValue
      .map((value) => normalizeTask(value))
      .filter((task): task is Task => task !== null)

    return normalizedTasks.length > 0 ? normalizedTasks : cloneTasks(starterTasks)
  } catch {
    return cloneTasks(starterTasks)
  }
}

export function saveTasks(tasks: Task[]) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export function createTask(title: string, details: string): Task {
  return {
    id: typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `task-${Date.now()}`,
    title,
    details,
    completed: false,
    createdAt: new Date().toISOString(),
  }
}

export { STORAGE_KEY }
