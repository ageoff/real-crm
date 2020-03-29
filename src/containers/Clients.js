import React, { useEffect } from 'react'
import '../assets/App.css'
import { geekblue, volcano, green, yellow } from '@ant-design/colors'
import { useSelector, useDispatch } from 'react-redux'
import { loadClients } from '../redux/clients'
import { Button, Table, Tag, PageHeader } from 'antd'
import { useHistory } from 'react-router-dom'

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

const columns = [
	{ title: 'First Name', dataIndex: 'first', key: 'first' },
	{ title: 'Last Name', dataIndex: 'last', key: 'last' },
	{ title: 'Status', dataIndex: 'status', key: 'status', render: s => {
		console.log(s)
		return <span><Tag color={getStatusColor(s)}>{s}</Tag></span>
	} },
]

const routes = [
	{
		path: '',
		breadcrumbName: 'Home',
	},
	{
		path: 'clients',
		breadcrumbName: 'Clients',
	},
]

const Clients = () => {
	const loading = useSelector(state => state.clients.loadingClients)
	const clients = useSelector(state => state.clients.clients)
	const dispatch = useDispatch()
	const history = useHistory()
	console.log(history)

	useEffect(() => {
		if (clients.length === 0) dispatch(loadClients())
	})

	return (
		<div>
			<PageHeader
				className="site-page-header"
				breadcrumb={{ routes }}
				title="Clients"
			/>
			<Button onClick={() => dispatch(loadClients())}>Refresh</Button>
			<Table
				loading={loading}
				columns={columns}
				dataSource={clients}
				rowKey={(record) => (record.first + record.last)}
				onRow={(record, index) => ({
					onClick: event => {
						// dispatch(setSelectedClient(record))
						history.push({
							pathname: 'clientdetails',
							search: '?id=' + record.id,
						})
					},
				})}
				pagination={false} />
		</div>
	)
}

export default Clients
