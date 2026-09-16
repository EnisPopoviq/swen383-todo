## 1. God Object, src/todo.js

**Where:** src/todo.js, lines 14-96 (class TodoManager)
**Smell:** God Object. It stores tasks, validates input, writes to localStorage, and renders the list into the DOM.
**Cost:** Four unrelated reasons to change this file. Adding a second storage option means editing the same class that owns validation, so a storage bug can break validation.
**Not yet fixing:** noted for Week 3.

## 2. Long Method, src/todo.js

**Where:** src/todo.js, lines 42-85 (render method)
**Smell:** Long Method. The function is too long and performs DOM creation, event binding, and string formatting all at once.
**Cost:** Hard to read and test. Making a small UI tweak requires stepping through complex logic, increasing the risk of introducing side effects.
**Not yet fixing:** noted for Week 3.

## 3. Magic Numbers, src/todo.js

**Where:** src/todo.js, line 23
**Smell:** Magic Numbers. Bare numbers are used directly in conditionals without explanation.
**Cost:** Anyone reading the code later won't know why that specific threshold was chosen, making future refactoring or debugging error-prone.
**Not yet fixing:** noted for Week 3.
