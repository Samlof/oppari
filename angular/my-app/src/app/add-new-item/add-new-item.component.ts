import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-add-new-item",
  templateUrl: "./add-new-item.component.html",
  styleUrls: ["./add-new-item.component.css"]
})
export class AddNewItemComponent {
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      title: "",
      description: ""
    });
  }
  checkoutForm: FormGroup;
  @Output() onCreateNew: EventEmitter<addNewItem> = new EventEmitter();

  onSubmit(customerData) {
    // Process checkout data here
    this.checkoutForm.reset();
    this.onCreateNew.emit({
      title: customerData.title,
      desc: customerData.description
    });
    console.warn("Your order has been submitted", customerData);
  }
}

export interface addNewItem {
  title: string;
  desc: string;
}
