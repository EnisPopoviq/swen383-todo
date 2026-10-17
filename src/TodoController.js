
export class TodoController {
  constructor(todoService, todoRenderer) {
    this.todoService = todoService;
    this.todoRenderer = todoRenderer;

    // Give the renderer callbacks instead of the service.
    this.todoRenderer.bindActions({
      onToggle: id => this.toggleTask(id),
      onDelete: id => this.deleteTask(id)
    });
  }

  start() {
    this.todoRenderer.render(this.todoService);
  }

  addTask(description, type) {
    const newId = this.todoService.addTask(description, type);

    if (newId !== null) {
      this.todoRenderer.render(this.todoService, newId);
    }

    return newId;
  }

  toggleTask(id) {
    this.todoService.toggleComplete(id);
    this.todoRenderer.render(this.todoService);
  }

  deleteTask(id) {
    this.todoService.deleteTask(id);
    this.todoRenderer.render(this.todoService);
  }
}
