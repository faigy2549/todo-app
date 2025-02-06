# Angular To-Do List Application

## Overview
This project is a Single Page Application (SPA) built with Angular (versions 17-19) for managing a to-do list. It allows users to add, mark as completed, delete, and filter tasks.

## Features
- **Add a new to-do item** with a title and optional description.
- **Mark to-do items as completed**.
- **Delete to-do items**.
- **Filter tasks** (All, Completed, Incomplete).
- **Form validation** (Title required, min 3 characters).
- **Uses Angular services** to manage to-do list data.
- **Styled using Angular Material** for a clean UI.

## Bonus Features
- **State management** using NgRx.
- **Persistent data storage** using localStorage.
- **Smooth animations** for adding/removing items.
- **Unit tests** using Karma/Jest for at least one component and the service.

## Installation
### Prerequisites
- Node.js (v16 or later recommended)
- Angular CLI (v17+)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/faigy2549/todo-app.git
   cd todo-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   ng serve
   ```
4. Open your browser and visit:
   ```
   http://localhost:4200
   ```

## Project Structure
```
/ src
  / app
    / components
      - to-do-list.component.ts
      - to-do-item.component.ts
      - add-to-do.component.ts
    / services
      - to-do.service.ts
    / store (if using NgRx)
  - app.module.ts
  - app.component.ts
  
```  
## Testing
Run unit tests with:
```sh
ng test
```

## Technologies Used
- Angular (v17-19)
- TypeScript
- Angular Material
- NgRx (Optional)
- Karma/Jest (Testing)
- LocalStorage (Optional for persistence)

## License
This project is licensed under the MIT License.
