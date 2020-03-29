import React, { useEffect } from 'react'
import '../assets/App.css'
import { geekblue, volcano, green, yellow } from '@ant-design/colors'
import { useSelector, useDispatch } from 'react-redux'
import { loadClients } from '../redux/clients'
import { Button, Table, Tag } from 'antd'

const getStatusColor = (status) => {
	console.log(green)
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

const columns = [
	{ title: 'First Name', dataIndex: 'first', key: 'first' },
	{ title: 'Last Name', dataIndex: 'last', key: 'last' },
	{ title: 'Status', dataIndex: 'status', key: 'status', render: s => {
		console.log(s)
		return <span><Tag color={getStatusColor(s)}>{s}</Tag></span>
	} },
]

const Clients = () => {
	const loading = useSelector(state => state.clients.loadingClients)
	const clients = useSelector(state => state.clients.clients)
	const dispatch = useDispatch()

	useEffect(() => {
		if (clients.length === 0) dispatch(loadClients())
	})

	return (
		<div>
			<h1>Clients</h1>
			<Button onClick={() => dispatch(loadClients())}>Refresh</Button>
			<Table
				loading={loading}
				columns={columns}
				dataSource={clients}
				rowKey={(record) => (record.first + record.last)}
				expandable={{
					expandedRowRender: record => <p>{record.first} {record.last}</p>,
				}}
				pagination={false} />
		</div>
	)
}

export default Clients
