import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, TodoListItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
