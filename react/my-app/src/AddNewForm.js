import React from "react";

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
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const onSubmit = () => {
    /** @type {TodoItem} */
    const newTodo = {
      createdAt: new Date(),
      description: description,
      title: title,
      done: false,
      id: -1
    };
    createdCb(newTodo);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="card">
      <div className="container">
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <h4>Luo uusi</h4>
          <div>
            <label>
              Title: <input type="text" id="title-input" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Description: <input type="text" id="description-input" value={description} onChange={e => setDescription(e.target.value)} />
            </label>
          </div>
          <input type="submit" value="Lisää" />
        </form>
      </div>
    </div>
  );
};

export default AddNewForm;
