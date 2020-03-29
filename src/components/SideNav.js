import React from 'react'
import { Menu, Layout } from 'antd'
import { useHistory } from 'react-router-dom'
import '../index.css'

const SideNav = () => {
  let history = useHistory()
  return (
      <Layout className='sideNav'>
  	<Menu
      mode="vertical"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0, backgroundColor: '#fafafa', minHeight: '100vh' }}
      onSelect={({ key }) => history.push(key)}
      >
      <Menu.ItemGroup>
        <Menu.Item key="foo">Home</Menu.Item>
        <Menu.Item key="foo">Clients</Menu.Item>
        <Menu.Item key="foo">My Estates</Menu.Item>
        <Menu.Item key="foo">Reporting</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup style={{ bottom: 0, position: 'relative' }}>
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu.ItemGroup>
  	</Menu>
    </Layout>
  )
}

export default SideNav
