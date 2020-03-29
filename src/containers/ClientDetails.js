import React, { useEffect } from 'react'
import '../assets/App.css'
import { geekblue, volcano, green, yellow } from '@ant-design/colors'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedClient, loadClient } from '../redux/clients'
import { Button, PageHeader, Spin, Result } from 'antd'
import { useHistory, useLocation, Link } from 'react-router-dom'

const routes = [
	{
		path: '/',
		breadcrumbName: 'Home',
	},
	{
		path: '/clients',
		breadcrumbName: 'Clients',
	},
	{
		path: 'clientdetails',
		breadcrumbName: 'Client Details',
	},
]

var parseQueryString = function(location) {

	var str = location.search
	var objURL = {}

	str.replace(
		new RegExp( '([^?=&]+)(=([^&]*))?', 'g' ),
		function( $0, $1, $2, $3 ){
			objURL[ $1 ] = $3
		}
	)
	return objURL
}

const Clients = () => {
	const selectedClient = useSelector(state => state.clients.selectedClient)
	const loading = useSelector(state => state.clients.loadingClient)
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()

	useEffect(() => {
		const params = parseQueryString(location)
		dispatch(loadClient(Number(params.id)))
	}, [ dispatch, location ])

	if (loading) return <Spin size="large"/>
	if (selectedClient == null) return <Result status="404" title="404" subTitle="Sorry, the client was not found." />
	return (
		<div>
			<PageHeader
				className="site-page-header"
				breadcrumb={{
					routes,
					itemRender: (route) => (route.path === 'clientdetails' ? <span>{route.breadcrumbName}</span> : <Link to={{ pathname: route.path }}>{route.breadcrumbName}</Link>),
				}}
				title={`${selectedClient.first} ${selectedClient.last}`}
			/>
			<Button onClick={() => {
				dispatch(setSelectedClient(null))
				history.push('clients')
			}}>Back</Button>
		</div>
	)
}

export default Clients
