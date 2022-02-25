# Splitter
Save laborious work and hundreds of hours going through your bank statements.

“The inefficiency of splitting the bill” - [study](http://rady.ucsd.edu/faculty/directory/gneezy/pub/docs/splitting-bill.pdf)

Huge Mental cost - to do the math, leave that on us.

## Unforget forgetting

Transactions drowned in your bank statement can be easily missed out, periodic reconciliations eliminates chances as these as transactions always remain unless reconciled.

The transaction synchronization will sync and fetch all your transactions, which take place automatically  on a periodic basis.

Using Plaid

## Tech Stack

A full stack application built using **React**, **Serverless Hasura** to autopilot managing and splitting expenses within groups (Roommates, Friends, Family, etc.)
-   Hasura - Serverless Backend
- Postgres - Database
-   Hasura Auth - JWT Authentication
-   GraphQL - Data Fetching
-   Plaid - To Connect accounts from Financial Institutions to automate the manual process of adding transactions.

## To Run Locally
```
$ git clone https://github.com/CodeBrewerz/expense-splitter.git
$ cd expense-splitter
$ npm install
$ npm run start
```

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
