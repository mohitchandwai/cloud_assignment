

**This is a simple web application that displays a list of manhwa titles, their genres, and brief descriptions.**

**Features:**

- Fetches manhwa data from a mock JSON file.
- Displays manhwa titles, genres, and descriptions in a readable format.

**Getting Started:**

1. **Prerequisites:**
    - Node.js (version 14 or later) and npm installed on your system.
    - A basic understanding of HTML, CSS, and JavaScript (React recommended).
2. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/manhwa-list-app.git
    ```
3. **Install dependencies:**
    - Navigate to the project directory:
        ```bash
        cd manhwa-list-app
        ```
    - Install dependencies for both frontend and backend:
        ```bash
        npm install
        ```
4. **Run the application:**
    - Start the backend server:
        ```bash
        node backend/server.js
        ```
    - Start the frontend development server:
        ```bash
        npm start
        ```
5. **Access the application:**
    - Open your web browser and navigate to `http://localhost:3000`.

**How it works:**

- The application retrieves manhwa data from a JSON file located in the `mock-data.json` file.
- The frontend (React) renders the retrieved data as a list of manhwa entries, displaying the title, genre, and description for each item.

**Customization:**

- You can customize the mock data in `mock-data.json` with your own manhwa information.
- The frontend code can be further enhanced with styling and additional features.

