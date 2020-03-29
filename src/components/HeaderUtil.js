import React from 'react'
import { connect } from 'react-redux'
import { setLoggedIn } from '../redux/user'
import { Form, Input, Button, Avatar } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const HeaderUtil = ({ authenticated, doLogin }) => {
	const history = useHistory()
	const location = useLocation()
	const onFinish = values => {
		console.log('Success:', values)
		doLogin(true)

		const { from } = location.state || { from: { pathname: '/' }}
		history.replace(from)
	}

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo)
	}
	return (
		authenticated ? <div style={{ alignSelf: 'center' }}><span style={{ color: 'white' }}><Avatar icon={<UserOutlined />}/> Adam Geo</span></div> :
			<Form layout="inline" style={{ color: 'white', alignItems: 'center' }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}>
				<Form.Item
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
					style={{ color: 'white' }}
				>
					<Input prefix={<UserOutlined />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password prefix={<LockOutlined />} placeholder="Password" />
				</Form.Item>
				<Form.Item >
					<Button type="primary" htmlType="submit">
					Submit
					</Button>
				</Form.Item>
			</Form>
	)
}

const mapStateToProps = state => ({
	authenticated: state.user.loggedIn,
})

const mapDispatchToProps = dispatch => ({
	doLogin: val => dispatch(setLoggedIn(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUtil)
