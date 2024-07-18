import { TodoListItem } from '../../Stores/TodoListStore';

const useItemsToRenderPriority = (currentTodoList:TodoListItem[]): TodoListItem[] => {
    let itemsGroup: TodoListItem[] = [];

    itemsGroup = currentTodoList.filter((item) => item.priority === 'HIGH');
    itemsGroup = itemsGroup.concat(currentTodoList.filter((item) => item.priority === 'MEDIUM'));
    itemsGroup = itemsGroup.concat(currentTodoList.filter((item) => item.priority === 'LOW'));
    itemsGroup = itemsGroup.concat(currentTodoList.filter((item) => item.priority === ''));

    return itemsGroup;
};

export default useItemsToRenderPriority;
