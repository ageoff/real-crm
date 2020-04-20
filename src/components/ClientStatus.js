import React from 'react'
import '../assets/App.css'
import { useSelector, useDispatch } from 'react-redux'
import { Select, Form } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { saveClient } from '../redux/clients'
import { geekblue, volcano, green, yellow } from '@ant-design/colors'

const { Option } = Select

const getStatusColor = (status) => {
	switch (status) {
	case 'Searching':
		return volcano.primary
	case 'Under Contract':
		return yellow.primary
	case 'Placed':
		return green.primary
	default:
		return geekblue.primary
	}
}

const options = [
	'Searching',
	'Under Contract',
	'Placed',
]

const ClientStatus = () => {
	const dispatch = useDispatch()
	const client = useSelector(state => state.clients.selectedClient)
	const onStatus = ({ status }) => dispatch(saveClient({ ...client, status }))

	return (
		<Form onValuesChange={onStatus} labelCol={{ span:1 }} wrapperCol={{ span: 8 }} colon={false}>
			<Form.Item label={<InfoCircleOutlined style={{ color: 'rgba(0, 0, 0, 0.65)' }} />} name="status">
				<Select defaultValue={client.status} style={{ color: getStatusColor(client.status) }}>
					{options.map(o => (<Option key={'option' + o} value={o} style={{ color: getStatusColor(o) }}>{o}</Option>))}
				</Select>
			</Form.Item>
		</Form>
	)
}

export default ClientStatus
