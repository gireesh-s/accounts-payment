import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Page from '../Page/Page'

const Routes = () => {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route path={"/"} exact component={Page}/>
        </Switch>
    </Router>
  )
}

export default Routes