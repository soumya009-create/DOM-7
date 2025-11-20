Complete LocalStorage Flow
✔ When page loads:
localStorage → JSON.parse → tasks array → displayed on screen

✔ When adding a task:
input → tasks array → localStorage → DOM update

✔ When removing a task:
DOM remove → update tasks array → update localStorage → rebuild DOM
