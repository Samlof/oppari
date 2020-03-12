import React from "react";
import AddNewForm from "./AddNewForm";
import { AddItem, DemoInit, GetAll } from "./api/localStorage";
import "./App.css";
import TodoListItem from "./TodoListItem";

function App() {
  const [items, setItems] = React.useState(/**@type {import('./api/todotype').TodoItem[]}*/ ([]));

  // Alustetaan komponentin käynnistyessä
  React.useEffect(() => {
    let all = GetAll();
    if (all.length === 0) {
      DemoInit();
      all = GetAll();
    }
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
      <AddNewForm createdCb={createdCb} />
      {items.map(todoItem => (
        <TodoListItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </div>
  );
}

export default App;
