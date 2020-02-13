import { Component, OnInit, Input } from "@angular/core";
import { TodoItem } from "../services/todo-service.service";

@Component({
  selector: "app-todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"]
})
export class TodoListItemComponent implements OnInit {
  constructor() {}

  @Input() todoItem: TodoItem;

  ngOnInit(): void {}
}
