export default function TodoItem({ todo, onToggle, onDelete }) {
  const { id, text, completed } = todo
  return (
    <li className="todo" data-testid="todo-item">
      <input id={`cb-${id}`} type="checkbox" checked={completed} onChange={() => onToggle(id)}
        aria-label={completed ? `Mark "${text}" as active` : `Mark "${text}" as completed`} />
      <label htmlFor={`cb-${id}`} className={completed ? 'done' : ''}>{text}</label>
      <button className="icon danger" onClick={() => onDelete(id)} aria-label={`Delete "${text}"`} title="Delete">×</button>
    </li>
  )
}
