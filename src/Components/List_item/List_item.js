import React from 'react';
import './List_item.css';

const List_item = (props) => {
	const class_name = "list-item-" + props.index;
	
	return (
		<li className="list-item">
			<input type="checkbox" id={class_name} checked={props.checked} onChange={() => props.update(!props.checked, props.index)} />
			<label htmlFor={class_name}>{props.text}</label>
			<span className="checkmark"></span>
      	</li>
	);
}

export default List_item;