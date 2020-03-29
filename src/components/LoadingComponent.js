import React from 'react'
import '../index.css'
import { Layout, Spin, Row, Col } from 'antd'

const LoadingComponent = ({ white }) => (
	<Layout className={white ? 'sideNav' : ''}>
		<Row style={{ padding: 50 }}>
			<Col span={24} style={{ textAlign: 'center' }}><Spin size="large"/></Col>
			<Col span={24} style={{ textAlign: 'center' }}><h1>Loading</h1></Col>
		</Row>
	</Layout>
)

export default LoadingComponent
