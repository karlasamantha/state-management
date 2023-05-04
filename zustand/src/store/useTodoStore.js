import { create } from 'zustand'

export const useTodoStore = create((set) => ({
  todos: [],
  add: (todoText) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          text: todoText
        }
      ]
    })),
  remove: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId)
    })),
  update: (newTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return {
            ...todo,
            text: newTodo.text
          }
        }
        return todo
      })
    }))
}))
