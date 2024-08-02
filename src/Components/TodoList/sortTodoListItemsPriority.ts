import { TodoListItem, TodoListPriorityType } from '../../Stores/TodoListStore';

const PRIORITY_ARRAY: TodoListPriorityType[] = ['HIGH', 'MEDIUM', 'LOW', 'NONE'];

const sortTodoListItemsPriority = (currentTodoList: TodoListItem[]): TodoListItem[] => {
    let itemsGroup: TodoListItem[] = [];

    itemsGroup = currentTodoList
        .toSorted((a: TodoListItem, b: TodoListItem): number => ((PRIORITY_ARRAY.indexOf(a.priority)
    > PRIORITY_ARRAY.indexOf(b.priority)) ? 1 : -1));

    return itemsGroup;
};

export default sortTodoListItemsPriority;
