# Project Overview

The RESTful API Weather Application is a web dashboard that allows users to explore current weather conditions and manage a list of saved locations. With this app, users can:

Retrieve real-time weather information for any city using the OpenWeatherMap API (GET request).
Add new locations along with details like city, country, and notes via the JSONPlaceholder API (POST request).
Edit existing saved locations (PUT request).
Remove saved locations from the list (DELETE request).

This project demonstrates practical usage of all major RESTful API operations through a clean, interactive interface.

# Technology Stack
Framework: Plain HTML, CSS, and JavaScript
State Management: Local state managed in JavaScript variables
Styling: CSS
Form Handling: Native HTML forms with JavaScript event listeners
Data Fetching: fetch API for GET, POST, PUT, and DELETE requests

# Setup Instructions
Clone the repository
git clone repository-url
Install dependencies
(This project does not require additional dependencies.)
Start the application
Simply open index.html in your web browser; no server setup is needed.
Access the app
Navigate to index.html and interact with the tabs to use different API features.

# Application Structure
Pages/Routes: Single-page interface organized into tabs:
GET Weather: Fetches current weather for a given city
POST Location: Add new locations to your list
PUT Location: Edit existing location details
DELETE Location: Remove saved locations
Component Organization: All functionality is contained within index.html and script.js, with UI divided into tab sections
State Management: JavaScript array savedLocations tracks saved location data

# Key Components
Tab Navigation: Switch seamlessly between GET, POST, PUT, and DELETE operations
Weather Display Card: Shows city name, temperature, humidity, wind speed, and weather description
Saved Location Card: Displays location details with edit and delete options
Response Info Panel: Shows API request URL, status code, and response data for debugging

# Authentication Flow
This demo does not require user authentication
To fetch weather data, you must include your OpenWeatherMap API key in script.js under API_KEY

# Features Implemented
GET Weather: Retrieve weather for a city using OpenWeatherMap API
POST Location: Add new locations via JSONPlaceholder API
PUT Location: Update details of saved locations
DELETE Location: Remove saved locations from the list
Tabbed Interface: Smoothly navigate between API operations
Response Info Panel: View API responses for clarity and debugging