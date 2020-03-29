import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { Row, Col } from 'antd'
import SideNav from '../components/SideNav'
import Landing from '../containers/Landing'
import Home from '../containers/Home'
import Login from '../containers/Login'
import PageNotFound from '../containers/PageNotFound'
import HeaderUtil from '../components/HeaderUtil'

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
  const showSide = (authenticated && history.location.pathname !== '/')
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
      <Row type='flex' style={{ overflow: 'hidden' }}>
        {showSide && <Col span={3}>
          <SideNav />
        </Col>}
        <Col span={showSide ? 21 : 24}>
          <div className='scrollContent'>
            <Switch>
              <Route exact path="/" component={Landing} />
              <ProtectedRoute path="/home" component={Home} authenticated={authenticated} />
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
