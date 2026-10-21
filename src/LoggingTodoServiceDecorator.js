
export class LoggingTodoServiceDecorator {
  constructor(todoService) {
    this.todoService = todoService;
  }

  // Log task creation before delegating to the real service.
  addTask(description) {
    console.log('LOG: addTask', description);
    return this.todoService.addTask(description);
  }

  addUrgentTask(description) {
    console.log('LOG: addUrgentTask', description);
    return this.todoService.addUrgentTask(description);
  }

  // Forward the other operations unchanged.
  toggleComplete(id) {
    return this.todoService.toggleComplete(id);
  }

  deleteTask(id) {
    return this.todoService.deleteTask(id);
  }

  getWorkloadSummary() {
    return this.todoService.getWorkloadSummary();
  }

  get tasks() {
    return this.todoService.tasks;
  }
}
