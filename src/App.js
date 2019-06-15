import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import IndexPage from './pages/Index'
import DetailPage from './pages/Detail'
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/detail" component={DetailPage} />
        <Redirect to="/" />
      </Switch>
      {/* <IndexPage /> */}
    </div>
  )
}

export default App
