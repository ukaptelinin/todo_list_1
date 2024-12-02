import { TodoListPriorityType } from '../../Stores/TodoListStore';

type RecordType = Record<TodoListPriorityType, string>;

const PRIORITY_COLOR_TABLE: RecordType = {
    HIGH: 'crimson',
    MEDIUM: 'green',
    LOW: 'darkblue',
    NONE: 'black',
};

const setTodoListItemPriorityColor = (priority: TodoListPriorityType): string =>
    PRIORITY_COLOR_TABLE[priority];

export default setTodoListItemPriorityColor;
