import React from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import { connect } from 'react-redux'
import { setLoggedIn } from '../redux/user'
import { useHistory } from 'react-router-dom'
import { Layout } from 'antd'

const Home = ({ logout }) => {
  let history = useHistory()
  const doLogout = () => {
    logout(false)
    history.push('/')
  }
  return (

    <Layout >
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
    </Layout>

  );
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  logout: val => dispatch(setLoggedIn(val))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
