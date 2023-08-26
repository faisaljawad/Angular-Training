import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasks: any[] = [
    {
      name: "Task 1",
      status: "pending",
      priority: 'low',
      created_at: Date.now(),
    },
    {
      name: "Task 2",
      status: "pending",
      priority: 'medium',
      created_at: Date.now(),
    },
    {
      name: "Task 3",
      status: "pending",
      priority: 'high',
      created_at: Date.now(),
    }

  ];

  getTasks(): any[] {
    return this.tasks;
  }

  addTask(item: any): void {
    this.tasks.push(item);
  }

  updateTaskStatus(name:string): void {

  }

  constructor() {

  }
}
