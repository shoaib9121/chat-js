# Chat with Bot

A basic chat app where an end-user submits a message and a bot
replies with a random response based on 3 different types of
messages i.e. Greetings, Responses, and Answers

## What's covered inside

- A chat box can be toggled by pressing either on chat header or on chevron icon up/down
- An interactive UI is setup with a bit of animation(s)
- Chat box is sticky to bottom of the page
- History messages are preloaded through mock prefetch
- Message Timestamp is displayed in readable format
- A total Message count be seen in chat header
- When a user inputs a message, 3 small animated dots can be seen representing if the bot is typing something
- If user wants to insert line breaks through Shift+Enter keys then line breaks are also catered in the UI chat message
- A message can be sent both by pressing Enter key or hitting the Send button
- When a new message is pushed into the history then chatbox adjusts its scroll height position until a newly added message can be displayed in the viewport
- If a message is sent from outside the chat box then a red chat header can be seen alongwith unread number of messages count only in case if the chat box is collapsed/not opened
- XSS protection on user input i.e. it filters out any unwanted script or vulnerable attacks
- UI responsiveness is also covered as per the need
- Basic Unit Testing is covered through Jest

## Tech-stack used

- React, Javascript, Jest, HTML, and CSS/SCSS

## Available Scripts

In the project directory, you can run:

### `npm install`

Do this only first time

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
