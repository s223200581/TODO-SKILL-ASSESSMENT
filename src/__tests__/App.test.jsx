import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App.jsx'

function add(text) {
  const input = screen.getByLabelText(/new task/i)
  const addBtn = screen.getByRole('button', { name: /add/i })
  return userEvent.type(input, text).then(() => userEvent.click(addBtn))
}

describe('App integration', () => {
  test('adds, completes, filters, and deletes tasks', async () => {
    render(<App />)
    await add('Write tests')
    await add('Ship app')
    expect(screen.getAllByTestId('todo-item').length).toBe(2)

    const firstCheckbox = screen.getAllByRole('checkbox')[0]
    await userEvent.click(firstCheckbox)
    await userEvent.click(screen.getByRole('tab', { name: /completed/i }))
    expect(screen.getAllByTestId('todo-item').length).toBe(1)

    const delBtn = screen.getByRole('button', { name: /delete/i })
    await userEvent.click(delBtn)
    expect(screen.queryByTestId('todo-item')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('tab', { name: 'All' }))
    expect(screen.getAllByTestId('todo-item').length).toBe(1)
  })

  test('prevents empty input and too long text', async () => {
    render(<App />)
    const addBtn = screen.getByRole('button', { name: /add/i })
    await userEvent.click(addBtn)
    expect(screen.getByRole('alert')).toHaveTextContent(/please enter/i)

    const longText = 'a'.repeat(161)
    const input = screen.getByLabelText(/new task/i)
    await userEvent.type(input, longText)
    await userEvent.click(addBtn)
    expect(screen.getByRole('alert')).toHaveTextContent(/160/)
  })
})
