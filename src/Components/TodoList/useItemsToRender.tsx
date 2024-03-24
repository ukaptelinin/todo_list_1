import { useContext } from 'react';
import {
    TodosStateContext, TodoItem, AMOUNT,
} from '../TodosStateContextProvider/context';

const preparePage = (currentPage: number, currentTodoListItem:TodoItem[]): TodoItem[] => currentTodoListItem
    .slice(currentPage * AMOUNT, currentPage * AMOUNT + AMOUNT);

const useItemsToRender = (): TodoItem[] => {
    const {
        itemsList, todoRenderType, todoRenderPageNumber,
    } = useContext(TodosStateContext);

    let itemsGroup: TodoItem[] = [];

    switch (todoRenderType) {
    case 'ACTIVE':
        itemsGroup = itemsList.filter((item) => !item.isDone);
        break;
    case 'COMPLETED':
        itemsGroup = itemsList.filter((item) => item.isDone);
        break;
    default:
        itemsGroup = itemsList;
    }
    return preparePage(todoRenderPageNumber, itemsGroup);
};

export default useItemsToRender;
