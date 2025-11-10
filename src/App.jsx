import { useTodos } from './hooks/useTodos.js'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'

export default function App() {
  const { filtered, filter, setFilter, addTodo, toggleTodo, deleteTodo, error, setError } = useTodos()

  return (
    <div className="container">
      <header>
        <h1>Accessible ToDo</h1>
        <p className="muted">A minimal, accessible, responsive ToDo built with reusable components.</p>
      </header>

      <TodoInput onAdd={addTodo} error={error} clearError={setError} />

      <div className="filters" role="tablist" aria-label="Filter tasks">
        <button role="tab" aria-selected={filter === 'all'} className={filter === 'all' ? 'pill active' : 'pill'} onClick={() => setFilter('all')}>All</button>
        <button role="tab" aria-selected={filter === 'active'} className={filter === 'active' ? 'pill active' : 'pill'} onClick={() => setFilter('active')}>Active</button>
        <button role="tab" aria-selected={filter === 'completed'} className={filter === 'completed' ? 'pill active' : 'pill'} onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <main>
        <TodoList items={filtered} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>

      <footer><small>Built with React + Vite. Keyboard-friendly and screen-reader aware.</small></footer>
    </div>
  )
}
