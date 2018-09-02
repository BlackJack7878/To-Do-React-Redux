const initialState = {
	visibility: "ALL_TODO",
	todos: [
		{
			text: "First to do",
			checked: false,
			id: 0
		},
		{
			text: "Second to do",
			checked: true,
			id: 1
		}
	]
};

function visibility(state = "SHOW_ALL", action) {
	switch (action.type) {
		case "CHANGE_VISIBILITY": {
			return action.visibility;
		}
		default: {
			return state;
		}
	}
}

function todos(state = [], action) {
	switch (action.type) {
		case "TODO_CHECK": {
			return state.map((item, index) => {
				if (item.id === action.id) {
					let is_checked = !item.checked;
					return { ...item, checked: is_checked };
				}
				return item;
			});
		}
		case "TODO_ADD": {
			return [ ...state, { text: action.text, id: action.id, checked: false } ];
		}
		default: return state;
	}
}

export function rootReducer(state = initialState, action) {
	return {
		visibility: visibility(state.visibility, action),
		todos: todos(state.todos, action)
	}
}