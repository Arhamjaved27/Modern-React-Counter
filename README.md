# Modern React Counter

The Modern React Counter & Feedback Form is an interactive web application built using React.js.
It consists of two main components
- A Modern Counter that visually tracks progress toward a user-defined goal.
- A Feedback Form that allows users to submit their name, email, and message.
The counter dynamically changes the background color of the page and displays motivational messages based on progress percentage. It includes increment/decrement buttons, a reset function, and a smooth bounce animation for better user engagement.
The feedback form uses React state management to collect user input and display it upon submission. 

## Features

- Counter with increment / decrement buttons and bounce animation
- Body background color updates based on percentage of the total goal
- Two-column feedback form 

## Project structure

- `src/Components/Counter.js`: main counter logic, animation and background logic
- `src/Components/Counter.css`: styles for the counter
- `src/Components/Form.js`: feedback form component and layout
- `src/Components/Form.css`: styles for the form
- `src/App.js`: mounts `Counter` and `Form` 

## Installation

Prerequisites: 
- Node.js (version 14 or later)
- npm or yarn package manager

Steps:

1.	Download or clone the project folder
```powershell
#run this command in  terminal
git clone https://github.com/yourusername/modern-react-counter.git
#then go inside the folder
cd modern-react-counter
```

2.	Install dependencies
```powershell
npm install
```

3.	Run the project
npm start

4.	Open your browser and go to
```powershell
http://localhost:3000
```

This runs the app in development mode. Open http://localhost:3000 in your browser to view it.

## Usage

- Use the “+” and “–” buttons to increase or decrease the counter.
- Change the “Total Goal” input to set your target.
- Watch as the background color and message update with your progress.
- Click Reset to start over.
- Scroll down to use the Feedback Form  fill in your details and click Send Feedback to display your input.
- You can later connect the form to a backend or email API for real data submission.


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


