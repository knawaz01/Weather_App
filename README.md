# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Weather App

This is a simple Weather App that allows users to search for weather information by city. The application displays current weather conditions, including temperature, wind speed, and humidity, and supports both light and dark themes.

## Table of Contents
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Approach and Technologies Used](#approach-and-technologies-used)
- [Known Issues or Limitations](#known-issues-or-limitations)
- [License](#license)

## Getting Started

To get a local copy of this project up and running on your machine, follow these steps.

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your machine. You can download and install Node.js from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application

To start the application locally, run:
```bash
npm run dev

This will start the development server and open the application in your default web browser. If it doesn't open automatically, navigate to http://localhost:5173 in your browser.


Approach and Technologies Used


Approach
The application follows a simple and modular approach, breaking down the UI into components. It uses a combination of React hooks (useState) to manage state and conditional rendering for displaying weather data and theme switching.

Technologies
React: A JavaScript library for building user interfaces.
CSS: For styling the components and ensuring responsiveness.
OpenWeatherMap API: To fetch weather data based on the user's input.
JavaScript (ES6): For the overall functionality and logic of the application.
dateFormat: A library to format dates in a readable manner.
React-Feather: For using Feather icons in React components.


Known Issues or Limitations

The application currently only supports fetching weather data for a single city at a time.
Error handling for network requests and invalid city names could be improved.
The responsiveness has been tested on common screen sizes but may need further adjustments for very large or very small screens.
There is no caching or local storage implementation, so each search triggers a new API request.