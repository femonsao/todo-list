import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  constructor() { }

  ngDoCheck(): void {
    this.localStorageData();
  }

  ngOnInit(): void {
  }

  public deleteItemTaskList(itemIndex: number) {
    this.taskList.splice(itemIndex, 1)
  }

  public deleteAllTask() {
    this.taskList = [];
  }

  public setEmitTaskList(taksEvent: string) {
    this.taskList.push({ 'task': taksEvent, 'checked': false })
  }

  public validationInput(inputEvent: string, taskIndex: number) {
    if (!inputEvent.length) {
      const confirm = window.confirm('Task está vazia, Deseja Deletar');
      if (confirm)
        this.deleteItemTaskList(taskIndex)
    }

  }

  public localStorageData() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

}
