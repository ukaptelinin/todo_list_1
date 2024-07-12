import { AMOUNT } from '../../../../constants';
import useTodoListStore from '../../../../Hooks/useTodoListStore';
import { TodoListItem } from '../../../../Stores/TodoListStore';

const prepareCardList = (currentTodoCardList:TodoListItem[]): TodoListItem[] => currentTodoCardList
    .slice(0, AMOUNT);

const useItemsListToRender = (): TodoListItem[] => {
    const todoListStore = useTodoListStore();

    let itemsGroup: TodoListItem[] = [];

    itemsGroup = todoListStore.itemList;

    return prepareCardList(itemsGroup);
};

export default useItemsListToRender;
