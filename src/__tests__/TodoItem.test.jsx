import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from '../components/TodoItem.jsx'

test('delete and toggle callbacks fire', async () => {
  const onToggle = vi.fn()
  const onDelete = vi.fn()
  const todo = { id: 'x', text: 'Do thing', completed: false }
  render(<TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />)

  await userEvent.click(screen.getByRole('checkbox'))
  expect(onToggle).toHaveBeenCalledWith('x')

  await userEvent.click(screen.getByRole('button', { name: /delete/i }))
  expect(onDelete).toHaveBeenCalledWith('x')
})
