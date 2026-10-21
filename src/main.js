
import { TodoRenderer } from './TodoRenderer.js';
import { TodoController } from './TodoController.js';
import { LocalStorageFactory } from './StorageFactory.js';
import { IdeaBox } from './IdeaBox.js';
import { IdeaBoxAdapter } from './IdeaBoxAdapter.js';
import { LoggingTodoServiceDecorator } from './LoggingTodoServiceDecorator.js';

window.addEventListener('DOMContentLoaded', () => {
  // Factory Method from Lab 6.
  const factory = new LocalStorageFactory();

  // Decorator: add logging without modifying TodoService.
  const service = new LoggingTodoServiceDecorator(
    factory.createService()
  );

  // GRASP Controller and Renderer from Lab 4.
  const renderer = new TodoRenderer('task-container');
  const controller = new TodoController(service, renderer);

  controller.start();

  const input = document.getElementById('task-input');
  const addBtn = document.getElementById('add-task-btn');
  const addUrgentBtn = document.getElementById('add-urgent-btn');
  const suggestBtn = document.getElementById('suggest-btn');

  // Normal task.
  addBtn.addEventListener('click', () => {
    if (controller.addTask(input.value) !== null) {
      input.value = '';
    }
  });

  // Urgent task.
  addUrgentBtn.addEventListener('click', () => {
    if (controller.addUrgentTask(input.value) !== null) {
      input.value = '';
    }
  });

  // Press Enter to add a normal task.
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      addBtn.click();
    }
  });

  // Adapter: reuse the external IdeaBox class.
  const suggestions = new IdeaBoxAdapter(new IdeaBox());

  suggestBtn.addEventListener('click', () => {
    controller.addTask(suggestions.getSuggestion());
  });
});
