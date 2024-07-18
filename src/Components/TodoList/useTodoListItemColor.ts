import useTodoListStore from '../../Hooks/useTodoListStore';
import { TodoListItem } from '../../Stores/TodoListStore';

const useTodoListItemColor = (currentId: number): string => {
    const todoListStore = useTodoListStore();
    let itemColor = '';
    const currentItem:TodoListItem | undefined = todoListStore.itemList.find(
        (item: TodoListItem) => (item.id === currentId));
    if (currentItem) {
        switch (currentItem.priority) {
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
    }

    return itemColor;
};

export default useTodoListItemColor;
