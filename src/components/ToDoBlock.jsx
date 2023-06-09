import React from 'react'

function ToDoBlock(props) {
	const {value, isDone} = props;
	return(
		<div className="to__doBlock">
			<div className="to__doBlock-block">
				<button className={isDone ? "to__doBlock-block__icon " +
																"to__doBlock-block__icon-done" : "to__doBlock-block__icon"}>
					<span></span>
				</button>
				<div className={isDone ? "to__doBlock-block__text-done" :
					"to__doBlock-block__text"}>
					{value}
				</div>
			</div>

		</div>
	)
}

export default ToDoBlock;