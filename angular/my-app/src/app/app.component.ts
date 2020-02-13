import { Component, OnInit } from "@angular/core";
import { TodoService, TodoItem } from "./services/todo-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private TodoService: TodoService) {}

  todoItems: TodoItem[];

  ngOnInit(): void {
    this.TodoService.DemoInit();

    this.todoItems = this.TodoService.GetAll();
  }
}
