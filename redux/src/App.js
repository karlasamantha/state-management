import { useId, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, update, remove } from './store/todoSlice'
import './App.css'
import Item from './components/Item'

function App() {
  const key = useId()
  const inputRef = useRef('')

  const todos = useSelector((state) => state.todos.list)
  const dispatch = useDispatch()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Using Redux</p>

        <div>
          <ul>
            {todos?.map((todo, index) => {
              return (
                <Item
                  key={key + index}
                  title={todo?.title}
                  onChange={(e) =>
                    dispatch(update({ id: todo?.id, title: e.target.value }))
                  }
                  handleRemove={() => dispatch(remove(todo?.id))}
                />
              )
            })}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(add({ title: inputRef.current.value }))
            inputRef.current.value = ''
          }}
        >
          <label htmlFor="add-todo">Add Todo</label>
          <input id="add-todo" type="text" ref={inputRef} defaultValue="" />
        </form>
      </header>
    </div>
  )
}

export default App
