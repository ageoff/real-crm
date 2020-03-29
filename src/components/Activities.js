import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spin, Timeline } from 'antd'
import { geekblue, volcano, green, yellow } from '@ant-design/colors'
import { loadActivity } from '../redux/clients'

const getActivityColor = (type) => {
	switch (type) {
	case 'severe':
		return volcano.primary
	case 'warning':
		return yellow.primary
	case 'standard':
		return green.primary
	default:
		return geekblue.primary
	}
}

const Activities = ({ id }) => {
	const activities = useSelector(state => state.clients.activity)
	const loading = useSelector(state => state.clients.loadingActivity)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadActivity(id))
	}, [ id, dispatch ])

	if (loading) return <Spin size="large" />
	return (
		<Timeline>
			{activities.map((a, i) => (
				<Timeline.Item key={'activity' + i} color={getActivityColor(a.type)}>
					<p>{a.time}: {a.text}</p>
					{a.details && <p>{a.details}</p>}
				</Timeline.Item>
			))}
		</Timeline>
	)
}

export default Activities
