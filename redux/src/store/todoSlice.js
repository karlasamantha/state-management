import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState = {
  list: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.list.push({
        id: v4(),
        title: action.payload.title
      })
    },
    update: (state, action) => {
      const updatedList = state.list.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title
        }
        return item
      })
      state.list = updatedList
    },
    remove: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, update, remove } = todoSlice.actions

export default todoSlice.reducer
