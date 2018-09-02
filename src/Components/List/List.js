import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkToDo, changeVisibility, addToDo } from '../../Store/actions';
import List_item from '../List_item/List_item';
import List_menu from '../List_menu/List_menu';

import './List.css';

class List extends Component {
  render() {
  	const List_items = this.props.todos.map((item, index) => {
  		if (this.props.visibility === "SHOW_CHECKED" && !item.checked) {
        return null;
      }
      else if (this.props.visibility === "SHOW_NOT_CHECKED" && item.checked) {
        return null;
      }
      else {
        return (
          <List_item 
            key={item.id} 
            index={item.id} 
            text={item.text} 
            checked={item.checked} 
            update={this.props.checkToDo}
          />
        );
      }
  	});

    return (
      <div className="list-app">
      	<List_menu 
      		item_counts={List_items.length}
      		add={this.props.addToDo}
          listFilter={this.props.changeVisibility}
      	/>
      	<div className="list-wrapper">
      		<ul>
      			{List_items}
      		</ul>
      	</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		visibility: state.visibility,
		todos: state.todos
	}
}

const mapActionToProps = (dispatch) => {
	return {
		addToDo: bindActionCreators(addToDo, dispatch),
		checkToDo: bindActionCreators(checkToDo, dispatch),
		changeVisibility: bindActionCreators(changeVisibility, dispatch)
	}
}

export default connect(mapStateToProps, mapActionToProps)(List);
