import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import {createTheme,ThemeProvider} from '@mui/material';
import {Provider} from 'react-redux';
import { legacy_createStore as createstore , applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import './index.css'

const theme=createTheme();//creating default theme


const store=createstore(reducers,compose(applyMiddleware(thunk)))
//creating a redux store with rootreducer as reducers and using a middleware thunk which enables us to return function in action creators instead of plain action object(asyncronous behaviour).the applymiddleware is a enhancer which enables us to use thunk.compose is used to combine multiple enhancers into single enhancer


ReactDOM.render(
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <App/>
    </Provider>
    </ThemeProvider>
    ,document.getElementById('root'))

