import { useId, useRef, useEffect } from 'react'
import Item from './components/Item'
import { useTodoStore } from './store/useTodoStore'
import './App.css'

function App() {
  const key = useId()
  const inputRef = useRef('')

  const { todos, add, remove, update } = useTodoStore()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    add(inputRef.current.value)

    inputRef.current.value = ''
  }

  return (
    <div>
      <header className="App-header">
        <h1>Using Zustand</h1>
      </header>

      <main>
        <ul>
          {todos?.map((todo, index) => {
            return (
              <Item
                key={key + index}
                text={todo.text}
                onChange={(e) => update({ id: todo.id, text: e.target.value })}
                handleRemove={() => remove(todo.id)}
              />
            )
          })}
        </ul>

        <form onSubmit={handleSubmit}>
          <label htmlFor="add-todo">Add Todo</label>
          <input id="add-todo" type="text" ref={inputRef} defaultValue="" />
        </form>
      </main>
    </div>
  )
}

export default App
