# Assignment_4_Single_Page_App

This is a single page application made using react.js. It is a blog site that showcases the home page which displays all the list of blogs and a blog page which displays that particular blog which is being clicked. 

This site also displays 5 article titles from newsapi.org which is a ajax call, and using useEffect hook the nav component gets refreshed every 5 secs.
The blog page also has a go back button which redirects to home page.

In addition to all required features some new features are also added such as:
1. Search blog by the category in search bar
2. If nothing is returned then appropriate error page gets rendered
3. If the id in the url does not exist then error page gets rendered
4. The blog page has an additional go back button on top left corner which redirects backs to home page

## Available Scripts

In the project directory, you can run:

## `npm install`

Install all the packages and dependency required to run the react app on your local machine.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
