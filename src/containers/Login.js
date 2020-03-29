import React from 'react'
import '../assets/App.css'
import { connect } from 'react-redux'
import { setLoggedIn } from '../redux/user'

import { Form, Input, Button, Checkbox, Layout } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
}

const Login = ({ doLogin }) => {
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
		<Layout>
			<Form
				{...layout}
				name="basic"
				className="loginForm"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input prefix={<UserOutlined />} />
				</Form.Item>
				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password prefix={<LockOutlined />} />
				</Form.Item>
				<Form.Item {...tailLayout} name="remember" valuePropName="checked">
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit">
            Submit
					</Button>
				</Form.Item>
			</Form>
		</Layout>
	)
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
	doLogin: val => dispatch(setLoggedIn(val)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
