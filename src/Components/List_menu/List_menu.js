import React, { Component } from 'react';

import './List_menu.css';

class List_menu extends Component {
	render() {
		return (
			<div className="list-menu">
      			<div className="list-menu-col">
      				<input type="text" placeholder="To Do Name" ref="todo_input" />
      				<div 
      					className="list-menu-button" 
      					onClick={() => this.props.add(this.refs.todo_input.value, this.props.item_counts)}
      				>Add</div>
      			</div>
                        <div className="list-menu-col">
                              <div className="list-menu-button" onClick={() => this.props.listFilter('SHOW_ALL')}>All</div>
                              <div className="list-menu-button" onClick={() => this.props.listFilter('SHOW_CHECKED')}>Checked</div>
                              <div className="list-menu-button" onClick={() => this.props.listFilter('SHOW_NOT_CHECKED')}>Not Checked</div>
                        </div>
      		</div>
		);
	}
}

export default List_menu;