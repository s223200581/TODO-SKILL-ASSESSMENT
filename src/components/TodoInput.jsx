import { useRef } from 'react'

export default function TodoInput({ onAdd, error, clearError }) {
  const inputRef = useRef(null)
  function handleSubmit(e) {
    e.preventDefault()
    const ok = onAdd(inputRef.current.value)
    if (ok) { inputRef.current.value = ''; inputRef.current.focus() }
  }
  function onInputChange() { if (error) clearError('') }

  return (
    <form aria-label="Add a task" onSubmit={handleSubmit} className="card">
      <label htmlFor="task" className="label">New task</label>
      <div className="row">
        <input id="task" ref={inputRef} type="text" name="task" placeholder="e.g., Buy milk"
          aria-invalid={!!error} aria-describedby={error ? 'task-error' : undefined} onChange={onInputChange}
          className="input" />
        <button type="submit" className="btn" aria-label="Add task (Enter)">Add</button>
      </div>
      <div role="status" aria-live="polite" className="assistive">Press Enter to add the task.</div>
      {error && <div id="task-error" role="alert" className="error">{error}</div>}
    </form>
  )
}
