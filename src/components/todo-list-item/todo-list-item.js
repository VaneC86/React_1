import React from 'react';

import './todo-list-item.css'
const TodoListItem =({label,important=false})=>{
	// console.log(props.label)
	// const{label,important}
	const style = {
		color:important?'red':'black',
		fontWeight:important?'bold':'normal',
	}
	return <span style={style} className='todo-list-item'>{label}</span>
	<button>
		<i className=''
	</button>
}

export default TodoListItem;