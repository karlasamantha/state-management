import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state) => {},
    update: (state) => {},
    remove: (state) => {}
  }
})

export const { add, update, remove } = todoSlice.actions

export default todoSlice.reducer
