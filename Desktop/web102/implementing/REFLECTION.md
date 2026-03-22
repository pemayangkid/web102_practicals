# Introduction

This project involved creating a RESTful API web application for managing weather information and saved locations. The main objective was to understand how front-end applications interact with APIs and handle different types of requests, including GET, POST, PUT, and DELETE.

The process began with planning the app’s structure, building a clean HTML interface, and writing JavaScript functions to communicate with the OpenWeatherMap and JSONPlaceholder APIs. Even without a backend database, mock API responses allowed the application to behave like a real, functional system. Overall, the project provided hands-on experience with API operations and front-end development.

# Main Concepts Applied

-> RESTful API Requests
The app implemented all core REST methods: GET requests to retrieve weather data, POST to save new locations, PUT to update existing locations, and DELETE to remove locations. Each request interacted with APIs and dynamically updated the user interface.

-> JavaScript Event Handling
Event listeners were used extensively to handle form submissions and button clicks. This made the application interactive and responsive to user actions in real time.

-> Local State Management
A JavaScript array was used to manage saved location data. This allowed the app to store, update, and display locations dynamically without needing a backend database.

-> Tabbed Interface
The user interface was organized into tabs to separate API operations. This structure made it intuitive for users to switch between fetching weather data, saving locations, editing entries, and deleting records.

-> Error Handling and Response Display
A dedicated panel displayed API responses and error messages, providing immediate feedback to users and aiding in debugging.

-> Mock Data Usage
The app used JSONPlaceholder API responses to simulate persistent data storage, allowing all features to function as if connected to a real database.

# What I Learned

Working on this project taught me practical skills in integrating RESTful APIs with front-end applications. I learned how to:

Implement GET, POST, PUT, and DELETE requests effectively.
Manage application state in JavaScript and update the interface dynamically.
Structure code cleanly by separating event handling, API logic, and rendering functions.
Handle errors gracefully while providing meaningful feedback to users.

Overall, the project enhanced my understanding of how data flows between the client and external APIs and reinforced the fundamentals of front-end development.

# Challenges Faced and How I Overcame Them

Managing Asynchronous Requests
Coordinating multiple API calls and ensuring the UI reflected changes correctly was initially challenging.
I overcame this by using async/await and testing each function independently to ensure proper execution.

Maintaining Local State
Tracking saved locations and updating them in the interface could be tricky.
I solved this by keeping a single savedLocations array and consistently updating it after every operation.

Handling Errors Clearly
Displaying useful error messages to users required careful implementation.
I implemented a response panel that shows status codes and messages, making it easier to debug and informing users when something went wrong.

Editing Locations Dynamically
Implementing the PUT functionality with a modal interface was challenging due to dynamic DOM manipulation.
I addressed this by targeting specific elements and updating both the UI and local state after each edit.

# Conclusion

This project offered a practical introduction to building front-end applications that integrate RESTful APIs. By implementing GET, POST, PUT, and DELETE operations, I gained a better understanding of how data flows between clients and external services.

The project also strengthened my skills in JavaScript, event handling, and state management. Even without a backend database, using mock APIs allowed the app to function like a real system, providing a strong foundation for future full-stack development projects.