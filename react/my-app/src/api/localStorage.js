import { TodoItemMocks } from './todo';

/**
 * @typedef {import('./todotype').TodoItem} TodoItem
 */

const db = window.localStorage;
const key = 'todo_data_json';
/**
 * Returns all current todo items or an empty array
 * @returns {TodoItem[]} All todo items
 */
export const GetAll = () => {
  /** @type {TodoItem[]} */
  const all = JSON.parse(db.getItem(key)) || [];
  return all.map(x => ({
    ...x,
    createdAt: new Date(x.createdAt),
  }));
};
/**
 * Saves the parameter as todo items
 * @param {TodoItem[]} all All todo items
 */
export const Save = all => {
  db.setItem(key, JSON.stringify(all));
};

export const DemoInit = () => {
  Save(TodoItemMocks);
};

/**
 * Adds the new item to db
 * @param {TodoItem} item Item to add
 * @returns {TodoItem}
 */
export const AddItem = item => {
  const all = GetAll();
  item.id = all.length + 1;
  all.push(item);
  Save(all);
  return item;
};

/**
 * Removes the item from db
 * @param {TodoItem} item Item to remove
 */
export const RemoveItem = item => {
  let all = GetAll();
  all = all.filter(x => x.id !== item.id);
  Save(all);
};

/**
 * Updates item in db
 * @param {TodoItem} item To update
 */
export const UpdateItem = item => {
  let all = GetAll();
  all = all.map(x => (x.id !== item.id ? x : { ...x, ...item }));
  Save(all);
};
