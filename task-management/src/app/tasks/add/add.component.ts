import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  newTaskName: string = ''; // Holds the value of the new task name
  selectedPriority: string = 'medium'; // Default priority

  constructor(private taskService: TaskService, private snackbar: MatSnackBar) {}

  onSubmit(): void {
    if (this.newTaskName.trim() !== '') {
      const task = {
        name: this.newTaskName,
        priority: this.selectedPriority,
        status: 'pending',
      };
      this.taskService.addTask(task); // Use your service's addData method
      this.newTaskName = ''; // Clear the input field
      this.selectedPriority = 'medium'; // Reset priority
      this.snackbar.open("Task successfully added", 'Close', {
        duration: 3000, // Duration in milliseconds
      });
    }
  }
}
