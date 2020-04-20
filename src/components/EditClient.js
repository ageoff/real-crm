import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { saveClient } from '../redux/clients'

const EditClient = ({ flipEdit }) => {
	const client = useSelector(state => state.clients.selectedClient)
	const dispatch = useDispatch()
	const onFinish = (entry) => {
		dispatch(saveClient({ ...client, ...entry }))
		flipEdit()
	}

	return (
		<div>
			<h1>Edit Client</h1>
			<Form size={'large'}
				labelCol={{ span: 2 }}
				wrapperCol={{ span: 18 }}
				initialValues={client}
				onFinish={onFinish}>
				<Form.Item label="First Name" name="first">
					<Input />
				</Form.Item>
				<Form.Item label="Last Name" name="last">
					<Input />
				</Form.Item>
				<Form.Item label="Email" name="email">
					<Input />
				</Form.Item>
				<Form.Item label="Phone" name="phone">
					<Input />
				</Form.Item>
				<Form.Item label="Address" name="address">
					<Input />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 2 }}>
					<Button type="primary" htmlType="submit">Submit</Button>
					<Button onClick={flipEdit} style={{ margin: '0 8px' }} >Cancel</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default EditClient
