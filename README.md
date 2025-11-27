# React Portfolio

This is a personal portfolio project built with React and Vite. It is designed to be simple to understand and modify.

## Prerequisites

Before you begin, make sure you have **Node.js** and **npm** installed on your computer.
You can verify if they are installed by running the following commands in your terminal:

```bash
node -v
npm -v
```

If they are not installed, you can download them from [nodejs.org](https://nodejs.org/).

## How to Run the Project

Follow these steps to run the application on your computer:

1.  **Install Dependencies**:
    Open the terminal in the project folder and run the following command to download all necessary libraries (listed in `package.json`):

    ```bash
    npm install
    ```

2.  **Run Development Server**:
    To see the site working while you edit, run:

    ```bash
    npm run dev
    ```

    The terminal will show a link (usually `http://localhost:5173`). Click on it or copy and paste it into your browser.

3.  **Build for Production**:
    When you are ready to publish the site, run:

    ```bash
    npm run build
    ```

    This will create a `dist` folder with the optimized files for the site.

## Project Structure

-   `src/components`: Contains React components (Header, Hero, ProjectList, etc.).
-   `src/data`: Contains project data (`projects.js`). You can add your own projects here.
-   `src/App.jsx`: The main component that assembles everything.
-   `src/index.css`: The CSS styles file.

## Technologies Used

-   **React**: Library for building user interfaces.
-   **Vite**: Fast tool for creating and running web projects.
-   **CSS**: Standard styling (no complex frameworks) for easy learning.
