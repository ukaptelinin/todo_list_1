import { TodoListPriorityType } from '../../Stores/TodoListStore';

const priorityColorTable = {
    HIGH: 'crimson',
    MEDIUM: 'green',
    LOW: 'darkblue',
    NONE: 'black',
};

const setTodoListItemPriorityColor = (priority: TodoListPriorityType):
string => priorityColorTable[priority] as TodoListPriorityType;

export default setTodoListItemPriorityColor;
