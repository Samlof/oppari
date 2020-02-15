import React from 'react';
import { DemoInit, GetAll } from './api/localStorage';
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
  return items.map(todoItem => (
    <TodoListItem key={todoItem.id} todoItem={todoItem} />
  ));
}

export default App;
