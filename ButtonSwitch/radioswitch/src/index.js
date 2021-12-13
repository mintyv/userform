import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';

const myMiddleware = store => next =>{
  // console.log("Middleware ran:");

  return next(action);
}

const capAtTen = store => next => action =>{
  if(store.getState().counter >= 10){
    return next({type : "DECREMENT"});
  }
  return next(action);
  }


// const MyMiddleware = store =>{
//   return next => {
//     return action =>{
//       console.log("Middleware ran");
//       return next(action);
//     }
//   }
// }
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(myMiddleware, secondMiddleware, capAtTen, logger)));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
