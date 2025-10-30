# Modern React Counter

A small React app demonstrating a modern counter component with animated feedback, body background color that changes as you approach a goal, and a two-column feedback form.

## Features

- Counter with increment / decrement buttons and bounce animation
- Body background color updates based on percentage of the total goal
- Two-column feedback form 

## Project structure

- `src/Components/Counter.js` — main counter logic, animation and background logic
- `src/Components/Counter.css` — styles for the counter
- `src/Components/Form.js` — feedback form component and layout
- `src/Components/Form.css` — styles for the form
- `src/App.js` — mounts `Counter` and `Form` 

## Installation

Prerequisites: Node.js (v14+) and npm/yarn.

Open a terminal in the project folder after downloading this repository root (`c:\Users\Arham\Desktop\AppVerse\task-13-react-counter`) and run:

```powershell
# install dependencies
npm install

# start the dev server
npm start
```

This runs the app in development mode. Open http://localhost:3000 in your browser to view it.

## Usage

- The app loads with two sections: the Counter  and the Feedback Form . If you don't see the form, make sure to scroll the page little bit.
- Click the `+` button to increment the counter and the `-` to decrement.
- Total goal: change the number in the `Total Goal` input to set the goal used for percentage calculations. The body background color and the message change as you progress toward that goal.
- Feedback form: the form collects name, email and message and currently logs the submission to the console. You can wire it to an API or email endpoint in `Form.js`.

## Notes & Troubleshooting

- To swap the left-side image in the form, update the `src` attribute in `src/Components/Form.js`.

## Development

- To run a production build:

```powershell
npm run build
```

- To run tests (if added):

```powershell
npm test
```

## Where to edit

- Change counter behavior: `src/Components/Counter.js`
- Change counter styles: `src/Components/Counter.css`
- Change form layout or image: `src/Components/Form.js`, `src/Components/Form.css`


