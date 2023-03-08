### Text Editor Starter Code

# PWA-TEXT-PROCESSOR 💬

This application allows users to create and save text notes. It uses IndexedDB to create an object store with GET and PUT methods to store and retrieve notes.

## Features 💡

- Users can create and save text notes.
- The application works offline, allowing users to create and access notes even without an internet connection.
- Content inside the text editor is automatically saved when the DOM window is unfocused.
- The application is bundled with webpack for efficient loading and resource management.
- A service worker with Workbox caches static assets for improved performance.
- The application uses Babel to support async/await functionality.
- The WebpackPwaManifest plugin generates a manifest.json file for the application.
- The application can be installed as a Progressive Web App.

## Installation 🔧

To install the application, run the following commands:

**npm install**
**npm run build**

## Usage 💻

To start the application, run the following command:

**npm start**

### Tools and Technologies Used

To create this application, I used:
- IndexedDB (via the idb package) as a database
- Webpack to bundle front-end code
- Workbox to create a service worker that caches static assets
- And, Heroku.

## Deployed Site 🌐
click here  --->

## Credits

- This is the [starter code](https://github.com/coding-boot-camp/cautious-meme) I used.