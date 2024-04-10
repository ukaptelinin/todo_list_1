import { useContext } from 'react';
import usePageNumber from '../../Hooks/usePageNumber';
import {
    TodosStateContext, TodoItem, AMOUNT,
} from '../TodosStateContextProvider/context';

const preparePage = (currentPage: number, currentTodoListItem:TodoItem[]): TodoItem[] => currentTodoListItem
    .slice(currentPage * AMOUNT, currentPage * AMOUNT + AMOUNT);

const useItemsToRender = (): TodoItem[] => {
    const {
        itemsList, todoRenderType,
    } = useContext(TodosStateContext);
    const [getPageNumber] = usePageNumber();

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
    return preparePage(getPageNumber() - 1, itemsGroup);
};

export default useItemsToRender;
