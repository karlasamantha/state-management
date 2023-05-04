import React, { useState } from 'react'

const Item = ({ text, onChange, handleRemove }) => {
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
      data-edit="input-edit "
      autoFocus
      id="update-todo"
      type="text"
      onKeyDown={handleKeyPress}
      onChange={onChange}
    />
  ) : (
    <div className="item">
      <li onClick={handleClick}>{text}</li>
      <button id="remove-todo" onClick={handleRemove}>
        Remove
      </button>
    </div>
  )
}

export default Item
