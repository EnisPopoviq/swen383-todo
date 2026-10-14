## 1. God Object, src/todo.js

**Where:** src/todo.js, lines 2–121 (class TodoManager)

**Baseline Commit:** c3dd8489da56496070850b5ba36db8d6bb52c90c

**Smell:** God Object. It stores tasks, validates input, writes to localStorage, and renders the list into the DOM.

**Evidence:** The TodoManager class handles several different responsibilities:

- Line 10: `const raw = localStorage.getItem('todo-tasks');` — loads saved tasks.
- Line 20: `if (trimmed.length < 3) {` — validates task descriptions.
- Line 94: `this.container.innerHTML =` — updates the page content.
- Line 101: `const toggleButtons = this.container.querySelectorAll('[data-toggle]');` — finds buttons to connect their click events.

All these operations are handled inside the same class, even though they serve different purposes.

**Cost:** Since TodoManager handles many different responsibilities, changing or fixing one part of the code could affect other parts. It also makes debugging and maintaining the application harder.

**Deferred Action:** Separate the responsibilities using SRP and dependency injection in Week 3, and improve event handling using GRASP Controller in Week 4.

**Status:** identified, not fixed (Lab 1)

## 2. Long Method, src/todo.js

**Where:** src/todo.js, lines 80–120 (render method)

**Baseline Commit:** c3dd8489da56496070850b5ba36db8d6bb52c90c

**Smell:** Long Method. The function is too long and performs DOM creation, event binding, and string formatting all at once.

**Evidence:** The render() method performs several different operations:

- Lines 83–84: Prepares the pending and completed task lists.
- Line 94: `this.container.innerHTML =` — updates the HTML displayed on the page.
- Line 103: `btn.addEventListener('click', () => this.toggleComplete(Number(btn.dataset.toggle)));` — handles button interactions.
- Line 115: `setTimeout(() => row.classList.remove('flash'), 1500);` — controls task highlighting.
- Line 119: `document.title = \`Todo (${this.tasks.filter(t => !t.completed).length})\`;` — updates the browser title.

Instead of focusing on one specific job, this method handles multiple parts of the application's display and interactions.

**Cost:** Hard to read and test. Making a small UI tweak requires stepping through complex logic, increasing the risk of introducing side effects.

**Deferred Action:** In Weeks 3–4, separate rendering from task management using SRP, and move user interaction coordination into a Controller.

**Status:** identified, not fixed (Lab 1)

## 3. Magic Numbers, src/todo.js

**Where:** src/todo.js, lines 20, 25, 115, and 125 (addTask, render, and buildTaskRow)

**Baseline Commit:** c3dd8489da56496070850b5ba36db8d6bb52c90c

**Smell:** Magic Numbers. Bare numbers are used directly in conditionals and other operations without meaningful constant names.

**Evidence:** Several numbers are written directly in the code:

- Line 20: `if (trimmed.length < 3) {` — requires at least 3 characters.
- Line 25: `if (this.tasks.length >= 20) {` — warns when the list reaches 20 tasks.
- Line 115: `setTimeout(() => row.classList.remove('flash'), 1500);` — controls how long the highlighting lasts.
- Line 125: `const label = desc.length > 40 ? \`${desc.slice(0, 40)}...\` : desc;` — limits the displayed description to 40 characters.

These numbers have specific purposes, but they are hardcoded instead of being represented by clearly named constants.

**Cost:** Anyone reading the code later might not immediately understand why those specific numbers were chosen. If the requirements change, developers would have to search for these values, making future maintenance or debugging more error-prone.

**Deferred Action:** In Week 3, replace these hardcoded numbers with meaningful named constants during refactoring.

**Status:** identified, not fixed (Lab 1)
