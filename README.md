📝 TODO List Application


📚 Table of Contents
/*******************************/
1.Overview
2.Features
3.Technologies Used
4.Setup Instructions
5.Implementation Details
6.File Structure
7.Live Demo
/*******************************/


🧐 Overview
/*******************************/
This feature-rich TODO List Application is built using React, TypeScript, and Sass. The app allows users to efficiently manage tasks with advanced features like drag-and-drop sorting, context menus, and task filtering. It is responsive, leveraging Redux Toolkit for state management and React DnD for seamless drag-and-drop functionality.
/*******************************/


🚀 Features
✅ Core Functionality
-Add Tasks: Add tasks via an input field and button, with validation to prevent empty tasks.
-Edit Tasks: Edit task names directly or through the context menu.
-Delete Tasks: Remove tasks using the delete button or the context menu.
-Mark Complete/Incomplete: Toggle a task's completion status via a checkbox or the context menu.


🛠 Advanced Features
-Global State Management: Task state is globally managed using Redux Toolkit.
-Persistent Data: Tasks are saved in localStorage to persist across browser reloads.
-Drag-and-Drop Sorting: Reorder tasks effortlessly using React DnD.
-Context Menu: Right-click on a task to open a context menu with options like:
     --Edit
     --Delete
     --Mark as Complete/Incomplete

-Task Filtering: Filter tasks to view:
     --All Tasks
     --Completed Tasks
     --Incomplete Tasks


📱 Responsive and Reusable Design
-Fully responsive design built using Sass with reusable variables and mixins.
-Mobile-friendly layout that adapts seamlessly to various screen sizes.


🌐 Live Demo
Check out the live version of the application here:
[ToDo Application](https://todotypescriptredux.netlify.app/)


🛠️ Technologies Used
Core Libraries
-React: Component-based frontend library for building the UI.
-TypeScript: Enforces type safety across the application.
-Redux Toolkit: Simplifies state management for tasks and filters.
-React DnD: Enables drag-and-drop functionality for reordering tasks.


Styling
--Sass: Used for custom styles with variables and mixins for reusability.
Data Persistence
--localStorage: Saves task data locally for persistence across browser reloads.


⚙️ Setup Instructions
Prerequisites
Make sure you have the following installed:
--Node.js (v16 or higher)
--npm or yarn

Steps to Run the Project
1.Clone the repository:
git clone <git@github.com:Bhabishya-123/todo-list-react.git>
cd <todo-list-react>

2.Install dependencies:
npm install

3.Start the development server:
npm start

4.Open the application in your browser at:
http://localhost:3000


🛠️ Implementation Details
🌐 State Management
-Redux Toolkit is used to manage the global state for tasks and filters.
-Actions include adding, editing, deleting, toggling completion, filtering, and reordering tasks.
-Task data is saved in localStorage to persist across reloads.


🔄 Drag-and-Drop Sorting
-Built using React DnD.
-Tasks are both draggable (useDrag) and droppable (useDrop), enabling seamless reordering.


📋 Context Menu
-A custom ContextMenu component is triggered by the onContextMenu event.
-Offers task-specific actions:
     --Edit
     --Delete
     --Toggle Complete/Incomplete


🔍 Filtering
-Users can filter tasks based on their completion status:
     --All tasks
     --Completed tasks
     --Incomplete tasks
-Filtering is handled by Redux's global state.


🎨 Responsive Design
-Built using Sass, utilizing variables and mixins to ensure reusable and maintainable styles.
-Mobile-friendly and responsive across various screen sizes.


✨ Optional Animations
-Smooth transitions enhance user experience for adding, deleting, and reordering tasks.


📂 File Structure
src/
├── components/
│   ├── App.tsx          # Main application component
│   ├── Form.tsx         # Component for adding new tasks
│   ├── List.tsx         # Component displaying the list of tasks
│   ├── Item.tsx         # Component for individual task items
│   ├── Filter.tsx       # Component for filtering tasks
│   ├── ContextMenu.tsx  # Custom context menu for task actions
├── store/
│   ├── store.ts         # Redux store setup
│   ├── taskSlice.ts     # Redux slice for task actions
├── styles/
│   ├── App.scss         # Styles for the main application
│   ├── Form.scss        # Styles for the form
│   ├── List.scss        # Styles for the task list
│   ├── Item.scss        # Styles for individual task items
│   ├── Filter.scss      # Styles for filter buttons
│   ├── ContextMenu.scss # Styles for the context menu
│   ├── responsive.scss  # Styles for responsive styles
│   ├── index.scss       # Styles for root index
│   ├── _variables.scss  # Sass variables for reusable styles
│   ├── _mixins.scss     # Sass mixins for reusable design patterns
├── types/
│   ├── Item.ts          # Type definition for task items
├── index.tsx            # Entry point for the application
├── README.md            # Documentation for the application


🎯 Features and Implementation Summary
-State Management: Powered by Redux Toolkit for managing tasks and filters globally.
-Drag-and-Drop Sorting: Built with React DnD, allowing users to reorder tasks seamlessly.
-Responsive Design: Custom styles using Sass ensure a clean and consistent UI.
-Context Menu: Provides a user-friendly way to edit, delete, and toggle tasks.
-Persistent Data: Tasks are saved in localStorage to ensure the user's data is not lost on refresh.