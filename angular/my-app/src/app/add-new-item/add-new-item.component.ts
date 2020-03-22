import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-add-new-item",
  templateUrl: "./add-new-item.component.html",
  styleUrls: ["./add-new-item.component.css"]
})
export class AddNewItemComponent {
  constructor(private formBuilder: FormBuilder) {
    this.addnewForm = this.formBuilder.group({
      title: "",
      description: ""
    });
  }
  addnewForm: FormGroup;
  @Output() onCreateNew: EventEmitter<addNewItem> = new EventEmitter();

  onSubmit(customerData) {
    this.addnewForm.reset();
    this.onCreateNew.emit({
      title: customerData.title,
      desc: customerData.description
    });
  }
}

export interface addNewItem {
  title: string;
  desc: string;
}
