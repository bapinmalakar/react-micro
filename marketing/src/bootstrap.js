import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//Mount function to start the app
// 1. For developent, running in isolation
// 2. Running in container

const mount = (documetElement)=> {
    ReactDom.render(
        <App />,
        documetElement
    )
}

//for developemnt and isolation

if(process.env.NODE_ENV === 'development') {
    const documetElement = document.getElementById('marketing-app-only');

    if(documetElement) mount(documetElement)
}

//for prod/container
export { mount }