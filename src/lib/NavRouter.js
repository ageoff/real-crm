import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Redirect } from 'react-router-dom'

import App from '../containers/App'
import Foo from '../containers/Foo'
import Login from '../containers/Login'
import PageNotFound from '../containers/PageNotFound'

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

const NavRouter = ({ history, authenticated }) => (
  <Router history={history}>
    <Route exact path="/" component={App} />
    <ProtectedRoute path="/foo" component={Foo} authenticated={authenticated} />
    <Route path='/login' component={Login} />
    <Route component={PageNotFound}/>
  </Router>
)
const mapStateToProps = state => ({
  authenticated: state.user.loggedIn
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(NavRouter)
