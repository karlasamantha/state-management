import todoReducer, { add, update, remove } from '../todoSlice'

jest.mock('uuid', () => ({ v4: '124354654' }))

describe('todo reducer', () => {
  it('should handle initial state successfully')
  it('should add a new todo')
  it('should update an existing todo')
  it('should remove a todo from the list')
})
