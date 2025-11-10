import { useEffect, useMemo, useState } from 'react'
import { loadTodos, saveTodos } from '../utils/storage'

export function useTodos() {
  const [todos, setTodos] = useState(() => loadTodos())
  const [filter, setFilter] = useState('all')
  const [error, setError] = useState('')

  useEffect(() => { saveTodos(todos) }, [todos])

  function addTodo(text) {
    const value = String(text ?? '').trim()
    if (!value) { setError('Please enter a task before adding.'); return false }
    if (value.length > 160) { setError('Task must be 160 characters or fewer.'); return false }
    const newTodo = { id: crypto.randomUUID(), text: value, completed: false, createdAt: Date.now() }
    setTodos(prev => [newTodo, ...prev])
    setError('')
    return true
  }
  function toggleTodo(id) { setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)) }
  function deleteTodo(id) { setTodos(prev => prev.filter(t => t.id !== id)) }

  const filtered = useMemo(() => {
    if (filter === 'active') return todos.filter(t => !t.completed)
    if (filter === 'completed') return todos.filter(t => t.completed)
    return todos
  }, [todos, filter])

  return { todos, filtered, filter, setFilter, addTodo, toggleTodo, deleteTodo, error, setError }
}
