import React from 'react'
import {Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import RouterDom from './router/router';
import PollProvider from './context/context';
// import RouterDom from './router/router';

function App() {
  return (
    <PollProvider>
      <RouterDom />
    </PollProvider>
  );
}

export default App;
