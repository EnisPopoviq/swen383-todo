
import { TodoService } from './TodoService.js';
import { LocalStorageHandler } from './LocalStorageHandler.js';
import { InMemoryStorageHandler } from './InMemoryStorageHandler.js';

// Creator
export class StorageFactory {
  createService() {
    const storage = this.createStorage();
    return new TodoService(storage);
  }

  createStorage() {
    throw new Error('override me');
  }
}

// Concrete Creator for browser storage
export class LocalStorageFactory extends StorageFactory {
  createStorage() {
    return new LocalStorageHandler();
  }
}

// Concrete Creator for temporary storage
export class InMemoryStorageFactory extends StorageFactory {
  createStorage() {
    return new InMemoryStorageHandler();
  }
}
