import React, { useEffect } from 'react'
import '../assets/App.css'
import { geekblue, volcano, green, yellow } from '@ant-design/colors'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedClient, loadClient } from '../redux/clients'
import { Timeline, Button, Form, Layout, PageHeader, Spin, Result, Card, Row, Col, Divider, Tabs, Tag, Input } from 'antd'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, InfoCircleOutlined } from '@ant-design/icons'

const { TabPane } = Tabs
const { TextArea } = Input

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
	const client = useSelector(state => state.clients.selectedClient)
	const loading = useSelector(state => state.clients.loadingClient)
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()

	useEffect(() => {
		const params = parseQueryString(location)
		dispatch(loadClient(Number(params.id)))
	}, [ dispatch, location ])

	if (loading) return <Spin size="large"/>
	if (client == null) return <Result status="404" title="404" subTitle="Sorry, the client was not found." />
	return (
		<Layout>
			<PageHeader
				className="site-page-header"
				breadcrumb={{
					routes,
					itemRender: (route) => (route.path === 'clientdetails' ? <span>{route.breadcrumbName}</span> : <Link to={{ pathname: route.path }}>{route.breadcrumbName}</Link>),
				}}
			/>
			<Row gutter={16} style={{ margin: 10 }}>
				<Col span={7}>
					<Card style={{ textAlign: 'center' }}>
						<img style={{ height: 104, width: 104, marginBottom: 20 }} alt="" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
						<p className="profileName">{`${client.first} ${client.last}`}</p>
						<p><InfoCircleOutlined style={{ marginRight: 5 }}/> <Tag color={getStatusColor(client.status)}>{client.status}</Tag></p>
						<Divider />
						<div className="profileDetails">
							<p><MailOutlined style={{ marginRight: 5 }}/> {client.email}</p>
							<p><PhoneOutlined style={{ marginRight: 5 }}/> {client.phone}</p>
							<p><EnvironmentOutlined style={{ marginRight: 5 }} /> {client.address}</p>
						</div>
					</Card>
				</Col>
				<Col span={17}>
					<Card>
						<Tabs>
							<TabPane tab="Activity" key="1">
								<p>Activity Goes Here</p>
								<Timeline>
									<Timeline.Item>2015-09-01: Client met</Timeline.Item>
									<Timeline.Item>Called Client 2015-09-01</Timeline.Item>
									<Timeline.Item>Visited this house 2015-09-01</Timeline.Item>
									<Timeline.Item>Wants to make an offer on this house 2015-09-01</Timeline.Item>
								</Timeline>
							</TabPane>
							<TabPane tab="Notes" key="2">
								<p>Notes Goes Here</p>
								<div>
									<Form.Item>
										<TextArea rows={4} onChange={()=>{}} value={''} />
									</Form.Item>
									<Form.Item>
										<Button htmlType="submit" loading={false} onClick={()=>{}} type="primary">
											Add Comment
										</Button>
									</Form.Item>
								</div>
							</TabPane>
						</Tabs>
					</Card>
				</Col>
			</Row>
		</Layout>
	)
}

export default Clients
