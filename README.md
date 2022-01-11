# A basic Chat App with Bot

A basic chat workflow where an end-user submits a message and a bot
replies with a random response based on 3 different types of
messages i.e. Greetings, Responses, and Answers

## What's covered inside

- A chat box can be toggled by pressing either on chat header or on chevron icon up/down
- History messages are preloaded through mock prefetch
- Message Timestamp is displayed in readable format
- A total Message count be seen in chat header
- If user wants to insert line breaks through Shift+Enter keys then line breaks are also catered in the UI chat message
- A message can be sent both by pressing Enter key or hitting the Send button
- When a new message is pushed into the history then chatbox adjusts its scroll height position until a newly added message can be displayed in the viewport
- When a user inputs a message, a small animation can be seen(with 3 circular dots) as if the bot is typing something
- If a message is sent outside the chat box then a red chat header can be seen alongwith unread number of messages count only in case if the chat box is collapsed/not opened
- XSS protection on user input i.e. it filters out any unwanted script or vulnerable attacks
- Basic Unit Testing is covered through Jest UI responsiveness is also covered as per the need
- Last but not least an interactive UI and a bit of animation(s)

## Tech-stack used

- React, Javascript, Jest, HTML, and CSS/SCSS

## Available Scripts

In the project directory, you can run:

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
