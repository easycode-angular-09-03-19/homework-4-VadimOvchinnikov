import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-new-to-do-item',
  templateUrl: './new-to-do-item.component.html',
  styleUrls: ['./new-to-do-item.component.css']
})
export class NewToDoItemComponent implements OnInit {
  @Output() itemValueAdded = new EventEmitter<string | null>();

  public form: FormGroup;

  public get valueTextBox() { return this.form.controls.valueTextBox; }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      valueTextBox: [null, [CustomValidators.notEmptyNorWhitespace]]
    });
  }

  public onSave() {
    if (this.form.valid) {
      this.itemValueAdded.emit(this.valueTextBox.value);
    }
  }

  public onCancelAdding() { this.itemValueAdded.emit(null); }
}
