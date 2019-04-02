import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './components/to-do-items/to-do-item/to-do-item.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';
import { NewToDoItemComponent } from './components/to-do-items/new-to-do-item/new-to-do-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    ToDoItemComponent,
    NewToDoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
