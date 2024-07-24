import { TodoListItem } from '../../Stores/TodoListStore';

const sortTodoListItemsPriority = (currentTodoList: TodoListItem[]): TodoListItem[] => {
    const priorityArray = ['HIGH', 'MEDIUM', 'LOW', 'NONE'];

    let itemsGroup: TodoListItem[] = [];

    itemsGroup = currentTodoList.toSorted((a: TodoListItem, b: TodoListItem): number => {
        if (priorityArray.indexOf(a.priority) > priorityArray.indexOf(b.priority)) return 1;
        return -1;
    });

    return itemsGroup;
};

export default sortTodoListItemsPriority;
