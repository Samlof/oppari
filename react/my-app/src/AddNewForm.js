import React from 'react';

/**
 * @typedef {import('./api/todotype').TodoItem} TodoItem
 */

/**
 * @typedef {Object} AddNewFormProps
 * @property {(item: TodoItem) => void} createdCb
 */

/**
 * AddNewForm
 * @param {AddNewFormProps} props
 */
const AddNewForm = ({ createdCb }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const onSubmit = () => {
    /** @type {TodoItem} */
    const newTodo = {
      createdAt: new Date(),
      description: description,
      title: title,
      done: false,
      id: -1,
    };
    createdCb(newTodo);
  };
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}>
      <label>
        Title:
        <input
          type="text"
          id="title-input"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          id="title-input"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
    </form>
  );
};

export default AddNewForm;
