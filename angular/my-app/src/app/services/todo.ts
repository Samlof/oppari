import { TodoItem } from "./todo-service.service";

export const TodoItemMocks: TodoItem[] = [
  {
    id: 1,
    title: "Esimerkki",
    description: "Tämä toimii esimerkkinä",
    createdAt: new Date("2020-02-06T16:53:52.178Z"),
    done: false
  },
  {
    id: 2,
    title: "Luo service",
    description: "Muista angular cli ja generate",
    createdAt: new Date("2020-07-06T16:53:52.178Z"),
    done: true
  },
  {
    id: 3,
    title: "Luo komponentti",
    description: "Generaten voi lyhentää g",
    createdAt: new Date("2020-11-06T16:53:52.178Z"),
    done: false
  }
];
