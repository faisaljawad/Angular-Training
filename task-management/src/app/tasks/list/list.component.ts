import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  tasks: any;
  dataSource: any;
  displayedColumns: string[] = ['name', 'priority', 'status', 'created_at', 'action'];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.getTasks();
    this.dataSource = new MatTableDataSource<any>(this.tasks);
  }

  getTasks(): any {
    return this.taskService.getTasks();
  }

  markAsDone(name: string) {
    const taskToUpdate = this.tasks.find((task: any) => task.name === name);
    if (taskToUpdate) {
      taskToUpdate.status = 'completed';
    }
  }
}
