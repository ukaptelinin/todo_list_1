import { TodoListItem } from '../../Stores/TodoListStore';

const priorityArray = ['HIGH', 'MEDIUM', 'LOW', 'NONE'];

const sortTodoListItemsPriority = (currentTodoList: TodoListItem[]): TodoListItem[] => {
    let itemsGroup: TodoListItem[] = [];

    itemsGroup = currentTodoList
        .toSorted((a: TodoListItem, b: TodoListItem): number => ((priorityArray.indexOf(a.priority)
    > priorityArray.indexOf(b.priority)) ? 1 : -1));

    return itemsGroup;
};

export default sortTodoListItemsPriority;
