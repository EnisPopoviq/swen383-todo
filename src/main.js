
import { TodoService } from './TodoService.js';
import { TodoRenderer } from './TodoRenderer.js';
import { LocalStorageHandler } from './LocalStorageHandler.js';

// Composition root: creates and connects the application's classes.
window.addEventListener('DOMContentLoaded', () => {
  const storage = new LocalStorageHandler();
  const service = new TodoService(storage);
  const renderer = new TodoRenderer('task-container', service);

  renderer.bindForm();
  renderer.render();
});
