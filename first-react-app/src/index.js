/** Import the React and ReactDOM libraries from ES2015 Modules
  * ES2015 Modules -> import
  * CommonJS Modules -> require
  */
import React from 'react';
import ReactDOM from 'react-dom';

/** There appears to be an issue in CRA in regards to fast 
 * refresh when code changes are made to the index.js file:
 * https://github.com/facebook/create-react-app/issues/9904
 * Manually refreshing will show the changes, also, any changes 
 * to components deeper in the file structure will cause an 
 * auto-refresh as expected.
 *
 * One workaround noted suggests putting the following in 
 * the index.js which enables reloading:
 */
if (module.hot) {
  module.hot.accept();
}

function getButtonText() {
  return 'Click on me!';
}

/** Create a React component
 *  const App = function() {}; or
 *  const App = () => {};
 */
const App = function() {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the React component and show ti on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
