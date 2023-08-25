import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasks: any[] = [];

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
