import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTask = new EventEmitter;

  public addItemTask: string = '';

  constructor() { }


  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.addItemTask = this.addItemTask.trim();
    if (this.addItemTask)
      this.emitItemTask.emit(this.addItemTask);
    this.addItemTask = "";
  }



}
