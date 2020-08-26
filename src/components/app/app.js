import React from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css'
const App = ()=>{
	const todoList = [
		{label:'Drink Coffee',important:false,id:1},
		{label:'Build React App',important:true,id:2},
		{label:'Drink Tea',important:false,id:3}
	]
	const login = <span>Log in please</span>;
	const welcome = <span>Welcome</span>;
	const isLogg=false;
	return(
	<div className='todo-app'>	
		{isLogg ? welcome:login}
		<AppHeader toDo={1} done={3}/>
		<div className='top-panel d-flex'>
			<SearchPanel/>
			<ItemStatusFilter/>
		</div>
		<TodoList todos={todoList}/>
	</div>	
	)
}

export default App;