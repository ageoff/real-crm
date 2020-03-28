import React from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import { connect } from 'react-redux'
import { setLoggedIn } from '../redux/user'
import { useHistory } from 'react-router-dom'

const Foo = ({ logout }) => {
  let history = useHistory()
  const doLogout = () => {
    logout(false)
    history.push('/')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FOOOOOOO <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() => doLogout(false)}
        >
          Logout
        </button>
      </header>
    </div>
  );
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  logout: val => dispatch(setLoggedIn(val))
})
export default connect(mapStateToProps, mapDispatchToProps)(Foo)
