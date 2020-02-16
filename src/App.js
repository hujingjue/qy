import React from 'react';
import Layout from 'pages/Layout.jsx'
import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'

import store from './store/index'



function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Layout></Layout>
        </Router>
      </Provider>
    </>
  );
}

export default App;
