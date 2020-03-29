import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { Row, Col } from 'antd'
import SideNav from '../components/SideNav'
import HeaderUtil from '../components/HeaderUtil'

import Landing from '../containers/Landing'
import Login from '../containers/Login'

import Home from '../containers/Home'
import Clients from '../containers/Clients'
import MyEstates from '../containers/MyEstates'
import Reporting from '../containers/Reporting'
import AccountSettings from '../containers/AccountSettings'

import PageNotFound from '../containers/PageNotFound'

import '../index.css'

const ProtectedRoute = ({ component, authenticated, ...rest }) => {
  const ChildComponent = component
  return (<Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          <ChildComponent />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

const NavRouter = ({ history, authenticated }) => {
  return (
    <Router history={history}>
      <Row type='flex'>
        <Col span={24} className='header'>
          <div className='innerHeader'>
            <img src={require('../assets/topLogo.svg')} alt='mystuff' className='topHeaderLogo' />
            <HeaderUtil />
          </div>
        </Col>
      </Row>
      <Row type='flex' className='mainContent'>
        {authenticated && <Col span={3}>
          <SideNav />
        </Col>}
        <Col span={authenticated ? 21 : 24}>
          <div className='scrollContent'>
            <Switch>
              <Route exact path="/">
              {!authenticated ? <Landing /> : <Redirect to='/home' />}
              </Route>
              <ProtectedRoute path="/home" component={Home} authenticated={authenticated} />
              <ProtectedRoute path="/clients" component={Clients} authenticated={authenticated} />
              <ProtectedRoute path="/myestates" component={MyEstates} authenticated={authenticated} />
              <ProtectedRoute path="/reporting" component={Reporting} authenticated={authenticated} />
              <ProtectedRoute path="/account" component={AccountSettings} authenticated={authenticated} />
              <Route path='/login' component={Login} />
              <Route component={PageNotFound}/>
            </Switch>
          </div>
        </Col>
      </Row>
    </Router>
  )
}
const mapStateToProps = state => ({
  authenticated: state.user.loggedIn
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(NavRouter)
