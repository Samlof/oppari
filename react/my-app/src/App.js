import React from 'react';
import AddNewForm from './AddNewForm';
import { AddItem, DemoInit, GetAll } from './api/localStorage';
import './App.css';
import TodoListItem from './TodoListItem';

function App() {
  const [items, setItems] = React.useState(
    /**@type {import('./api/todotype').TodoItem[]}*/ ([])
  );

  // Alustetaan komponentin käynnistyessä
  React.useEffect(() => {
    DemoInit();
    const all = GetAll();
    setItems(all);
  }, []);

  /**
   * createdCb
   * @param {import('./api/todotype').TodoItem} todo
   */
  const createdCb = todo => {
    todo = AddItem(todo);

    setItems(p => p.concat(todo));
  };
  return (
    <div>
      {items.map(todoItem => (
        <TodoListItem key={todoItem.id} todoItem={todoItem} />
      ))}
      <AddNewForm createdCb={createdCb} />
    </div>
  );
}

export default App;
