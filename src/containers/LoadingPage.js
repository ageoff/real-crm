import React from 'react'
import '../index.css'
import { Layout, Spin, Row, Col } from 'antd'

const LoadingPage = () => (
	<Layout className="sideNav">
		<Row type="flex">
			<Col span={24} className="header">
				<div className="innerHeader">
					<img src={require('../assets/topLogo.svg')} alt="mystuff" className="topHeaderLogo" />
				</div>
			</Col>
		</Row>
		<Row style={{ padding: 50 }}>
			<Col span={24} style={{ textAlign: 'center' }}><Spin size="large"/></Col>
			<Col span={24} style={{ textAlign: 'center' }}><h1>Loading</h1></Col>
		</Row>
	</Layout>
)

export default LoadingPage
