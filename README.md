# React Movie DB Search
A UI in React to search the Movie DB.

The user can enter some text into a search field, see and browse the results from the Movie DB.

1. [Initial Setup](#initial-setup)
1. [Useful Scripts](#useful-scripts)
1. [Automatic Scripts](#automatic-scripts)
1. [Project Structure](#project-structure)
1. [Still to do](#to-do)

## Initial setup
Ensure correct version of Node (with [Node Version Manager](https://github.com/creationix/nvm)):
```
nvm use
```

Install packages:
```
npm install
```

Create `.env` file (in the project root) with the following contents to hold **private API key** (where "xxxxxxxxxxx" is the private key to use):
```
REACT_APP_MOVIE_DB_API_KEY=xxxxxxxxxxx
```

## Useful Scripts
### Run
Run the application (opens in browser):
```
npm run start
```
Run the application (with _hot reload_ on changes):
```
npm run start:hot
```

### Build
Build for production:
```
npm run build
```

### Test
Run suite of tests:
```
npm run test
```
Run tests & generate _code coverage_ report:
```
npm run test:coverage
```
Run tests on changes:
```
npm run test:watch
```

### Lint
Run linting rules ([Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript)):
```
npm run lint
```
Fix linting issues (where possible):
```
npm run lint:fix
```

## Automatic Scripts
### Pre-commit
The pre-commit script runs `npm run lint:fix` to fix any style issues before committing.
### Pre-push
The pre-push script runs `npm run lint`, follwed by `npm run test` to ensure that style rules are being followed & all tests run before being pushed to the remote repository.

## Project Structure
The main application code is con`src`
* **config** - project configuration
* **src**
  * **api** - The Movie DB API
  * **components** - presentational components
  * **containers** - compositional components

## TO DO
* add logo to package (instead of linking externally)
* pagination button functionality
* improve test coverage (especially functional tests, as opposed to snapshot tests)
* improve error handling
* CORS - server implementation for when not running locally
* add ability to switch between search types (all, movies, tv shows & people)
* add configuration methods to API file (in order to fetch images related to results)
* add background image to search result panels
* make search result panels clickable (linking to result details)
* add empty search result UI state
* add 'loader' to show activity following search
