import { AMOUNT } from '../../../../constants';
import useTodoListStore from '../../../../Hooks/useTodoListStore';
import { TodoListItem } from '../../../../Stores/TodoListStore';
import sortTodoListItemsPriority from '../../../TodoList/sortTodoListItemsPriority';

const prepareCardList = (currentTodoCardList: TodoListItem[]): TodoListItem[] => currentTodoCardList
    .slice(0, AMOUNT);

const useItemsListToRender = (): TodoListItem[] => {
    const todoListStore = useTodoListStore();

    return prepareCardList(sortTodoListItemsPriority(todoListStore.itemList));
};

export default useItemsListToRender;
