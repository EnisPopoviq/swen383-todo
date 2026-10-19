
import { TodoRenderer } from './TodoRenderer.js';
import { TodoController } from './TodoController.js';
import { LocalStorageFactory } from './StorageFactory.js';

window.addEventListener('DOMContentLoaded', () => {
  const factory = new LocalStorageFactory();
  const service = factory.createService();

  const renderer = new TodoRenderer('task-container');
  const controller = new TodoController(service, renderer);

  controller.start();

  const input = document.getElementById('task-input');
  const addBtn = document.getElementById('add-task-btn');
  const addUrgentBtn = document.getElementById('add-urgent-btn');

  addBtn.addEventListener('click', () => {
    if (controller.addTask(input.value) !== null) {
      input.value = '';
    }
  });

  addUrgentBtn.addEventListener('click', () => {
    if (controller.addUrgentTask(input.value) !== null) {
      input.value = '';
    }
  });

  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      addBtn.click();
    }
  });
});
