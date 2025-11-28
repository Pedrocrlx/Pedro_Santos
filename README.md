# React Portfolio

This is a personal portfolio project built with React and Vite. It is designed to be simple to understand and modify.

## Prerequisites

Before you begin, make sure you have **Bun** installed on your computer.
You can verify if it is installed by running the following command in your terminal:

```bash
bun -v
```

If it is not installed, you can install it by running:

```bash
curl -fsSL https://bun.sh/install | bash
```

## How to Run the Project

Follow these steps to run the application on your computer:

1.  **Install Dependencies**:
    Open the terminal in the project folder and run the following command to download all necessary libraries (listed in `package.json`):

    ```bash
    bun install
    ```

2.  **Run Development Server**:
    To see the site working while you edit, run:

    ```bash
    bun run dev
    ```

    The terminal will show a link (usually `http://localhost:5173`). Click on it or copy and paste it into your browser.

3.  **Build for Production**:
    When you are ready to publish the site, run:

    ```bash
    bun run build
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
