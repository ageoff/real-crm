import React from 'react'
import { Menu, Layout } from 'antd'
import { useHistory } from 'react-router-dom'
import '../index.css'
import { connect } from 'react-redux'
import { setLoggedIn } from '../redux/user'

const SideNav = ({ logout }) => {
  let history = useHistory()
  return (
      <Layout className='sideNav'>
  	<Menu
      mode="vertical"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0, backgroundColor: '#fafafa', minHeight: '100vh' }}
      onSelect={({ key }) => {
        if (key === 'logout') {
          logout()
          history.push('/')
        }
        else {
          history.push(key)
        }
      }}
      >
      <Menu.ItemGroup>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="clients">Clients</Menu.Item>
        <Menu.Item key="myestates">My Estates</Menu.Item>
        <Menu.Item key="reporting">Reporting</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup style={{ bottom: 0, position: 'relative' }}>
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu.ItemGroup>
  	</Menu>
    </Layout>
  )
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(setLoggedIn(false))
})
export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
