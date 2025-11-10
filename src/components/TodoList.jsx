import TodoItem from './TodoItem.jsx'

export default function TodoList({ items, onToggle, onDelete }) {
  if (items.length === 0) { return <p className="muted" role="status" aria-live="polite">No tasks to show.</p> }
  return (
    <ul className="list" aria-label="Tasks">
      {items.map(t => <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />)}
    </ul>
  )
}
