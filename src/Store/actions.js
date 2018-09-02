// Action Generators

export const changeVisibility = (visibility) => {
	console.log(visibility);
	return { type: 'CHANGE_VISIBILITY', visibility: visibility };
}

export const checkToDo = (checked, id) => {
	return { type: 'TODO_CHECK', checked: checked, id: id };
}

export const addToDo = (text, id) => {
	return { type: 'TODO_ADD', text: text, id: id };
}