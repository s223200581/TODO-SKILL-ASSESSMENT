import { render, screen } from '@testing-library/react'
import TodoList from '../components/TodoList.jsx'

const items = [
  { id: '1', text: 'A', completed: false },
  { id: '2', text: 'B', completed: true }
]

test('renders empty state', () => {
  render(<TodoList items={[]} onToggle={() => {}} onDelete={() => {}} />)
  expect(screen.getByText(/no tasks/i)).toBeInTheDocument()
})

test('renders items', () => {
  render(<TodoList items={items} onToggle={() => {}} onDelete={() => {}} />)
  expect(screen.getAllByTestId('todo-item').length).toBe(2)
})
