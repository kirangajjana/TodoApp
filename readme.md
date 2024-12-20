# Todo List App

This is a simple Todo List web application built using HTML, CSS, and JavaScript. The app allows users to add and delete tasks dynamically. It includes light and dark mode functionality and stores tasks in the UI, allowing users to interact with them.

## Features

- **Add Tasks**: Users can input a task and click "Add Todo" to add it to the list.
- **Delete Tasks**: Each task has a delete button that allows users to remove it from the list.
- **Light & Dark Mode**: Toggle between light and dark modes for the background color of the app.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup and Usage

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser to run the app.

### Instructions:

- **Adding a Task**:
  1. Enter your task in the input field.
  2. Click the "Add Todo" button to add it to the list.
  
- **Deleting a Task**:
  1. Each task added will have a "Delete" button next to it.
  2. Click the "Delete" button to remove the task from the list.

### Light and Dark Mode:
- **Dark Mode**: Click on the "Dark Mode" button to change the background color to black.
- **Light Mode**: Click on the "Light Mode" button to revert the background color to a light color (rgb(156, 235, 208)).

## Code Explanation

- **HTML**:
  - A simple structure for the Todo List, which includes an input field, a button to add tasks, and a container (`#maindiv`) to display the tasks.

- **CSS**:
  - Basic styling for the Todo List, with custom styling for the `p` elements (each task) and the delete buttons.
  - Flexbox is used for layout and centering.

- **JavaScript**:
  - The script captures the input from the user and appends a new `<p>` element to the task list upon clicking the "Add Todo" button.
  - Each task comes with a delete button that removes the task when clicked.
  - The `darkmode` and `lightmode` buttons toggle the background color of the page.
  
## Code Breakdown

1. **Add Task**: 
   - When the user clicks the "Add Todo" button, the task text from the input field is added to the `#maindiv` container.
   - A delete button is created and appended next to the task.

2. **Delete Task**: 
   - The delete button next to each task removes the task from the container when clicked.

3. **Light and Dark Mode**:
   - The background color of the page is changed when the corresponding button is clicked.

## Demo

you can find the demo by clicking -> [here] 

## Conclusion

This simple Todo List app demonstrates the basic functionality of adding and deleting tasks using JavaScript. You can further extend this app by adding features like task persistence (localStorage) or adding priority levels, deadlines, etc.
