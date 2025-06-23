# Travlr Getaways Travel Website Fullstack Development-
MEAN (MongoDB, Express, Angular, Node.js)

Architecture
Express with HTML/CSS/JavaScript was used for the customer-facing portion. This approach was straightforward, serving static pages with dynamic functionality powered by JavaScript. It allowed for rapid delivery of a functional interface that users could interact with immediately without loading a large application bundle.

Angular Single-Page Application (SPA) was used for the administrative portal. Angular provided robust client-side routing, reusable components, form validation, and a modular architecture. This allowed us to build a more complex, dynamic interface ideal for managing trips, users, and bookings.

Using MongoDB, a NoSQL database, aligned well with the flexibility of our data models. Travel packages, user profiles, and bookings often vary in structure, and MongoDB’s document-based schema allowed us to iterate quickly without rigid schemas. This was especially beneficial during the prototype and testing phases where requirements evolved.
 Functionality
JSON (JavaScript Object Notation) is a data interchange format, while JavaScript is a scripting language. In this project, JSON acted as the bridge between the frontend and backend. For example, when a user submits a booking form, the Angular app sends a JSON object to the Express API, which then updates the MongoDB database. Similarly, when admins view available trips, the frontend parses JSON data received from the backend to dynamically render UI components.
Throughout the project, I refactored several components to enhance maintainability:
Moved repeated HTML snippets in Angular into reusable components (like trip cards and itinerary views).

Modularized the backend into separate controllers and services, improving separation of concerns.
Benefits included reduced code duplication, easier debugging / testing, and faster development for future features.

 Testing
API testing played a key role in validating functionality:
GET, POST, PUT, DELETE methods were tested using Postman and Angular service calls.


Example: The /api/trips endpoint was tested for retrieving all available trips, while /api/trips/:id tested updating specific trip data.


For security, we added JWT-based authentication to protect admin routes. Testing these routes required simulating login and attaching valid tokens to headers.


The added security layer introduced challenges. For instance, invalid or expired tokens returned 401 errors, which needed proper handling in both backend responses and Angular guards to redirect users appropriately.
Understanding how HTTP methods, RESTful endpoints, and authentication middleware work together was crucial in building a secure and functional full stack app.
Angular offers many fully integrated tools to facilitate the build. Once completed, you will test the application with the API and make certain the server returns the data properly. Finally, Travlr Getaways wants you to add a layer of security that applies to server-side applications to produce web tokens for web login authentication.
