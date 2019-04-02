import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from 'src/app/models/to-do-item';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() item: ToDoItem;
  @Output() itemDeleted = new EventEmitter<number>();

  public form: FormGroup;

  public isEditing: boolean = false;

  public get valueTextBox() { return this.form.controls.valueTextBox; }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      valueTextBox: [this.item.value, [CustomValidators.notEmptyNorWhitespace]]
    });
  }

  public onToggleCompleteness() { this.item.completed = !this.item.completed; }

  public onEdit() {
    this.isEditing = true;
    setTimeout(() => document.getElementById(`textbox${this.item.id}`).focus(), 0);
  }

  public onSave() {
    if (this.form.valid) {
      this.item.value = this.valueTextBox.value;
      this.isEditing = false;
    }
  }

  public onCancelEditing() {
    this.isEditing = false;
    this.valueTextBox.setValue(this.item.value);
  }

  public onDelete() {
    if (confirm("Are you sure you want to delete this item?")) {
      this.itemDeleted.emit(this.item.id);
    }
  }
}
