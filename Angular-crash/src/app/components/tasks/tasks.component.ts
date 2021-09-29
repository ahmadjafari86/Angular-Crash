import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]=TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
