import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";
import { AppComponent } from "./app.component";
import { AddNewItemComponent } from "./add-new-item/add-new-item.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, TodoListItemComponent, AddNewItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
