import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/to-do-item';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {
  public items: ToDoItem[] = [
    { id: 1, value: "Build a house", completed: false },
    { id: 2, value: "Plant a tree", completed: true },
    { id: 3, value: "Raise a son", completed: false }];

  public isAdding: boolean = false;

  constructor() { }

  ngOnInit() { }

  public onCompleteAllTasks() {
    for (const item of this.items) {
      item.completed = true;
    }
  }

  public onItemAdding() { this.isAdding = true; }

  public onItemValueAdded(value: string) {
    if (value) {
      const maxId = Math.max(...this.items.map(item => item.id), 0);
      this.items.push({ id: maxId + 1, value: value, completed: false });
    }
    this.isAdding = false;
  }

  public onItemDeleted(itemId: number) {
    this.items = this.items.filter(el => el.id !== itemId);
  }
}
