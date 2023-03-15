import { useId } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, update, remove } from './store/todoSlice'
import './App.css'

function App() {
  const key = useId()
  const todos = useSelector((state) => state.todos.list)
  const dispatch = useDispatch()

  // console.log('TODOS -> ', todos)

  return (
    <div className="App">
      <header className="App-header">
        <p>Using Redux</p>

        <div>
          <ul>
            {todos?.map((todo) => {
              return <li key={key}>{todo?.title}</li>
            })}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
