import { Component, OnInit } from "@angular/core";
import { TodoService, TodoItem } from "./services/todo-service.service";
import { addNewItem } from "./add-new-item/add-new-item.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private TodoService: TodoService) {}

  todoItems: TodoItem[];

  ngOnInit(): void {
    this.todoItems = this.TodoService.GetAll();
    if (this.todoItems.length === 0) {
      this.TodoService.DemoInit();
      this.todoItems = this.TodoService.GetAll();
    }
  }

  addNewItem(item: addNewItem) {
    this.TodoService.AddItem({
      createdAt: new Date(),
      description: item.desc,
      done: false,
      title: item.title,
      id: -1
    });
    this.todoItems = this.TodoService.GetAll();
  }
}
