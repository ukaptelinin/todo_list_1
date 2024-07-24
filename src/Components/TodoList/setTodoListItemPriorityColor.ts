import { TodoListPriorityType } from '../../Stores/TodoListStore';

const setTodoListItemPriorityColor = (priority: TodoListPriorityType): string => {
    let itemColor = '';

    switch (priority) {
    case 'HIGH':
        itemColor = 'crimson';
        break;
    case 'MEDIUM':
        itemColor = 'green';
        break;
    case 'LOW':
        itemColor = 'darkblue';
        break;
    default:
        itemColor = 'black';
    }

    return itemColor;
};

export default setTodoListItemPriorityColor;
