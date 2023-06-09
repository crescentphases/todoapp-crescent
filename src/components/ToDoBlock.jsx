import React from 'react'

function ToDoBlock(props) {
	const {value, isDone} = props;
	const [doneState, setDoneState] = React.useState(false);
	console.log(doneState);
	return(
		<div className="to__doBlock">
			<div className="to__doBlock-block">
				<button onClick={() => setDoneState(!doneState)} className={isDone || doneState ? "to__doBlock-block__icon " +
																"to__doBlock-block__icon-done" : "to__doBlock-block__icon"}>
				</button>
				<div className={isDone || doneState ? "to__doBlock-block__text-done" :
					"to__doBlock-block__text"}>
					{value}
				</div>
			</div>

		</div>
	)
}

export default ToDoBlock;