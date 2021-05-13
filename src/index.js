import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import transactionReducer from "./reducers/transactionReducer";
import { Provider } from "react-redux";
import  {BrowserRouter} from "react-router-dom";
if (localStorage.getItem('transactions') == null)
    localStorage.setItem('transactions', JSON.stringify([]))
let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transactions'))

}
const store = createStore(transactionReducer, initialState)

ReactDOM.render(<Provider store={store}><BrowserRouter >
 
    <App />
    
    </BrowserRouter></Provider>, document.getElementById('root'));


serviceWorker.unregister();
