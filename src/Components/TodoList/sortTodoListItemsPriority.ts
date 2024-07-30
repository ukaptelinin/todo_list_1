import { TodoListItem } from '../../Stores/TodoListStore';

<<<<<<< HEAD
const priorityArray = ['HIGH', 'MEDIUM', 'LOW', 'NONE'];

const sortTodoListItemsPriority = (currentTodoList: TodoListItem[]): TodoListItem[] => {
    let itemsGroup: TodoListItem[] = [];

    itemsGroup = currentTodoList
        .toSorted((a: TodoListItem, b: TodoListItem): number => ((priorityArray.indexOf(a.priority)
    > priorityArray.indexOf(b.priority)) ? 1 : -1));
=======
const sortTodoListItemsPriority = (currentTodoList: TodoListItem[]): TodoListItem[] => {
    const priorityArray = ['HIGH', 'MEDIUM', 'LOW', 'NONE'];

    let itemsGroup: TodoListItem[] = [];

    itemsGroup = currentTodoList.toSorted((a: TodoListItem, b: TodoListItem): number => {
        if (priorityArray.indexOf(a.priority) > priorityArray.indexOf(b.priority)) return 1;
        return -1;
    });
>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b

    return itemsGroup;
};

export default sortTodoListItemsPriority;
