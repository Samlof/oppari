import { Injectable } from "@angular/core";
import { TodoItemMocks } from "./todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private db = window.localStorage;
  private key = "todo_data_json";

  constructor() {}

  /**
   * Returns all current todo items or an empty array
   */
  GetAll(): TodoItem[] {
    const all = (JSON.parse(this.db.getItem(this.key)) || []) as TodoItem[];
    return all.map(x => ({
      ...x,
      createdAt: new Date(x.createdAt)
    }));
  }

  DemoInit() {
    this.Save(TodoItemMocks);
  }

  /**
   * Saves the parameter as todo items
   */
  Save = (all: TodoItem[]) => {
    this.db.setItem(this.key, JSON.stringify(all));
  };

  /**
   * Adds the new item to db
   */
  AddItem = (item: TodoItem) => {
    const all = this.GetAll();
    all.push(item);
    this.Save(all);
  };

  /**
   * Removes the item from db
   */
  RemoveItem = (item: TodoItem) => {
    let all = this.GetAll();
    all = all.filter(x => x.id !== item.id);
    this.Save(all);
  };

  /**
   * Updates item in db
   */
  UpdateItem = (item: TodoItem) => {
    let all = this.GetAll();
    all = all.map(x => (x.id !== item.id ? x : { ...x, ...item }));
    this.Save(all);
  };
}

export interface TodoItem {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  done: boolean;
}
