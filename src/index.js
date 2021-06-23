import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppProps from './App-props';
import AppState from './App-state'
import AppPropsShallowCompare from './App-props-shallow-compare'
import AppStateShallowCompare from './App-state-shallow-compare'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* DEMO 1 新旧props相同 */}
    <AppProps />
    
    {/* DEMO 2 新旧state相同 */}
    {/* <AppState/> */}

    {/* DEMO 3 props浅比较 */}
    {/* <AppPropsShallowCompare /> */}

    {/* DEMO 4 state 浅比较 */}
    {/* <AppStateShallowCompare /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
