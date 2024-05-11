import usePageNumber from '../../Hooks/usePageNumber';
import todoListStore, { TodoItem, AMOUNT } from '../../Stores/store';

const preparePage = (currentPage: number, currentTodoListItem:TodoItem[]): TodoItem[] => currentTodoListItem
    .slice(currentPage * AMOUNT, currentPage * AMOUNT + AMOUNT);

const useItemsToRender = (): TodoItem[] => {
    const [pageNumber] = usePageNumber();

    let itemsGroup: TodoItem[] = [];

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
