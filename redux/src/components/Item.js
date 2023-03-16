import React, { useState } from 'react'

const Item = ({ title, onChange, handleRemove }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleClick = () => {
    setIsEditing(true)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false)
    }
  }

  return isEditing ? (
    <input
      autoFocus
      id="update-todo"
      type="text"
      onKeyDown={handleKeyPress}
      onChange={onChange}
    />
  ) : (
    <>
      <li onClick={handleClick}>{title}</li>
      <button id="remove-todo" onClick={handleRemove}>
        Remove ToDo
      </button>
    </>
  )
}

export default Item
