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
}
