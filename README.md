This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Table of contents

1.  [Frontend](#frontend)
1.  [Backend](#backend)

# Frontend

## Running the project

1. change directory to `./grocery-app`
2. install dependencies `yarn`
3. `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## App structure

### src

_Main sources folder_

#### config

_Contains files that configure certain parts of the application e.g. API, Redux Store_

#### components

_All components that are widely used between domains. Like buttons or other UI components_

#### constants

_Constants used across the entire project_

#### domains:

_Domains split the app up in *logical* folders. If a single file becomes to big or has multiple items in it, you can split it up into separate files/folders._

| Folder name(s) |                                                              |
| -------------- | ------------------------------------------------------------ |
| components     | Domain specific components                                   |
| pages          | Domain specific screens                                      |
| redux          | Redux files related to this domain: actions, reducers, types |

#### util

_All functions that can be re-used throughout the app._

## Code Format

Using TSLint recommended and TSLint

To test linting run `yarn lint`

## Testing

_Using Jest and react-testing-library_

1.  In console `yarn test`

# Backend

## Running the backend

To run the app on `http://localhost:4000`

1. nav to directory `./grocery-api`
2. Install dependencies `yarn`
3. compile `npx tsc`
4. run dev server `node ./dist/index.js`

## Testing

_Did not test the graphql resolvers as I am working under the assumption i will be doing primarily frontend work_

1.  In console `yarn test`
