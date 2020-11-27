import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home.js'
import Layout from './components/Layout.js'
import './assets/styles/App.css'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
          <Route exact path='/' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
)


export default App;
