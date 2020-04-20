import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.svg'
import '../assets/App.css'
import { connect } from 'react-redux'
import { setLoggedIn } from '../redux/user'
import { useHistory } from 'react-router-dom'
import { Layout, PageHeader, Result, Card, Row, Col, Divider, Tabs, Tag } from 'antd'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, InfoCircleOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

const routes = [
	{
		path: '/',
		breadcrumbName: 'Home',
	},
	{
		path: 'account',
		breadcrumbName: 'Acount Settings',
	},
]


const AccountSettings = ({ logout }) => {
	const history = useHistory()
	const user = useSelector(state => state.user)

	return (
		<div>
			<PageHeader
				className="site-page-header"
				breadcrumb={{ routes }}
				title="Account Settings"
			/>
			<Row gutter={16} style={{ margin: 10 }}>
				<Col span={7}>
					<Card style={{ textAlign: 'center' }}>
						<img style={{ height: 104, width: 104, marginBottom: 20 }} alt="" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
						<p className="profileName">{`${user.first} ${user.last}`}</p>
						<Divider />
						<div className="profileDetails">
							<p><MailOutlined style={{ marginRight: 5 }}/> {user.email}</p>
							<p><PhoneOutlined style={{ marginRight: 5 }}/> {user.phone}</p>
							<p><EnvironmentOutlined style={{ marginRight: 5 }} /> {user.address}</p>
						</div>
					</Card>
				</Col>
				<Col span={17}>
					<Card>
						<Tabs>
							<TabPane tab="Activity" key="1">
								<p>Temp Activity</p>
							</TabPane>
							<TabPane tab="Notes" key="2">
								<p>Temp Activity</p>
							</TabPane>
						</Tabs>
					</Card>
				</Col>
			</Row>

		</div>
	)
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
	logout: val => dispatch(setLoggedIn(val)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings)
