import { TodoListPriorityType } from '../../Stores/TodoListStore';

<<<<<<< HEAD
const priorityColorTable = {
    HIGH: 'crimson',
    MEDIUM: 'green',
    LOW: 'darkblue',
    NONE: 'black',
};

const setTodoListItemPriorityColor = (priority: TodoListPriorityType):
string => priorityColorTable[priority] as TodoListPriorityType;

=======
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

>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b
export default setTodoListItemPriorityColor;
