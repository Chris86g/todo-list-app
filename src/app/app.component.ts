import { Component } from '@angular/core';

interface task {
  name: string,
  done: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  taskList = [
    {
      name: 'shopping',
      done: false
    },
    {
      name: 'MOT test',
      done: false
    }
  ]
}
