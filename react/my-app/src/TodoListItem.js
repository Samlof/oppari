import React from 'react';

/**
 * Renders a single todo item into a card
 * @param {{todoItem: import('./api/todotype').TodoItem}} props
 */
const TodoListItem = props => {
  const { todoItem } = props;

  return (
    <div className="card">
      <div className="container">
        <h4>{todoItem.title} </h4>
        <span style={{ fontStyle: 'italic' }}>{todoItem.description} </span>
        <div>Luotu: {todoItem.createdAt.toLocaleString()}</div>
        <div>{todoItem.done ? 'Tehty' : 'Kesken'}</div>
      </div>
    </div>
  );
};

export default TodoListItem;
