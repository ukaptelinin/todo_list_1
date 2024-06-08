import usePageNumber from '../../Hooks/usePageNumber';
import useTodoListStore from '../../Hooks/useTodoListStore';
import { TodoListItem } from '../../Stores/TodoListStore';
import { AMOUNT } from '../../constants';

const preparePage = (currentPage: number, currentTodoListItem:TodoListItem[]): TodoListItem[] => currentTodoListItem
    .slice(currentPage * AMOUNT, currentPage * AMOUNT + AMOUNT);

const useItemsToRender = (): TodoListItem[] => {
    const todoListStore = useTodoListStore();
    const [pageNumber] = usePageNumber();

    let itemsGroup: TodoListItem[] = [];

    switch (todoListStore.todoRenderType) {
    case 'ACTIVE':
        itemsGroup = todoListStore.itemList.filter((item) => !item.isDone);
        break;
    case 'COMPLETED':
        itemsGroup = todoListStore.itemList.filter((item) => item.isDone);
        break;
    default:
        itemsGroup = todoListStore.itemList;
    }
    return preparePage(pageNumber - 1, itemsGroup);
};

export default useItemsToRender;
