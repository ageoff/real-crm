import React from 'react'
import { Result } from 'antd'

const PageNotFound = () => (
	<div className="App">
		<header className="App-header">
    	<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
			/>
		</header>
	</div>
)

export default PageNotFound
