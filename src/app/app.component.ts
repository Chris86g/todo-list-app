import { Component } from '@angular/core';

export class task {
  constructor (
  name: string,
  done: boolean){

  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  taskList: Array<task>;

  constructor() {
    this.taskList = new Array<task>();
    this.taskList.push(new task("dupa",false))
  }

  setDone(item: task, done: boolean){
    item.done = true;
  }

  delTask(item: task, done: boolean){
    this.taskList.splice(this.taskList.indexOf(item),1)
  }
}
