# Marketing Platform Frontend

This is the frontend of a marketing platform designed to work with a backend that handles JWT-based authentication via HTTP-only cookies. The frontend is built using React and Vite, with additional tools and libraries for state management, form handling, and UI components.

## Features

- **React with Vite**: Fast development with React and Vite.
- **TailwindCSS**: Utility-first CSS framework for styling.
- ***`shascn/ui`:*** Pre-styled components integrated with TailwindCSS for consistent and accessible UI elements.
- **React Router**: Client-side routing with `react-router-dom`.
- **Form Management**: Form handling using `react-hook-form` and validation with `zod`.
- **State Management**: Data fetching, caching, and synchronization with server state `@tanstack/react-query`.

## Getting Started

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd bmlabs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**: Create a `.env` file in the root directory and add the following environment variables:
   ```bash
   VITE_API_URL=<your-backend-api-url>
   ```

### Running the Application

- **Development**:
  ```bash
  npm run dev
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Preview Production Build**:
  ```bash
  npm run preview
  ```

### Linting and Formatting

- **Check Formatting**:
  ```bash
  npm run format:write
  ```

- **Fix Linting Issues**:
  ```bash
  npm run lint:fix
  ```

## Deployment

This project is deployed on [Render](https://render.com).

- **Frontend URL**: [https://marketing-platform-frontend.onrender.com](https://marketing-platform-frontend.onrender.com)

## Usage

### Authentication

- **Login**: Users can log in using their credentials.
- **Registration**: New users can sign up and create an account.

### Advertising Campaigns

- **Campaign Management**: Users can create and manage advertising campaigns.
- **Prediction Feature**: Utilize the backend's prediction API to forecast campaign performance based on input parameters.

## File Structure

- **`src`**: Contains all the source code.
    - **`components`**: Reusable React components.
    - **`views`**: Page-level components.
    - **`hooks`**: Custom hooks.
    - **`services`**: API service functions.
    - **`styles`**: TailwindCSS custom styles and configurations.
