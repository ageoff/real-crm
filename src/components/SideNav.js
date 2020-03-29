import React from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import '../index.css'
import { connect } from 'react-redux'
import { setLoggedIn } from '../redux/user'

import {
  HomeOutlined,
  AreaChartOutlined,
  LogoutOutlined,
  SettingOutlined,
  BankOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const SideNav = ({ logout }) => {
  let history = useHistory()
  return (
  	<Menu
      mode="vertical"
      defaultSelectedKeys={['home']}
      selectedKeys={[history.location.pathname]}
      className='sideNav'
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
        <Menu.Item key="/home"><HomeOutlined />Home</Menu.Item>
        <Menu.Item key="/clients"><TeamOutlined />Clients</Menu.Item>
        <Menu.Item key="/myestates"><BankOutlined />My Estates</Menu.Item>
        <Menu.Item key="/reporting"><AreaChartOutlined />Reporting</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup style={{ bottom: 0, position: 'relative' }}>
        <Menu.Item key="/account"><SettingOutlined />Account Settings</Menu.Item>
        <Menu.Item key="logout"><LogoutOutlined />Logout</Menu.Item>
      </Menu.ItemGroup>
  	</Menu>
  )
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(setLoggedIn(false))
})
export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
