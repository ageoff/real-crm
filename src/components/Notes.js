import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Comment, Form, Input, Button, Avatar } from 'antd'
import { loadNotes, addNote } from '../redux/clients'
import LoadingComponent from './LoadingComponent'

const { TextArea } = Input

const Notes = ({ id }) => {
	const [ value, setValue ] = useState('')
	const notes = useSelector(state => state.clients.notes)
	const loading = useSelector(state => state.clients.loadingNotes)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadNotes(id))
	}, [ id, dispatch ])

	if (loading) return <LoadingComponent white={true} />
	return (
		<div>
			{notes.map((n, i) => (
				<Comment key={'notes' + i}
					avatar={
						<Avatar
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							alt="Han Solo"
						/>
					}
					author={<p>{n.user}</p>}
					content={<p>{n.text}</p>}
					datetime={<span>{n.time}</span>}
				/>
			))}
			<Form.Item>
				<TextArea rows={4} onChange={e => setValue(e.target.value)} value={value} />
			</Form.Item>
			<Form.Item>
				<Button htmlType="submit" loading={false} onClick={() => {
					dispatch(addNote(value))
					setValue('')
				}} type="primary">
					Add Notes
				</Button>
			</Form.Item>
		</div>
	)
}

export default Notes
