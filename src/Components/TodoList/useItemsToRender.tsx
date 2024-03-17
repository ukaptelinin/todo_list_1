import { useContext } from 'react';
import { TodosStateContext, TodoItem } from '../TodosStateContextProvider/context';

const useItemsToRender = (): TodoItem[] => {
    const AMOUNT = 5;
    const {
        itemsList, todoRenderType, todoRenderPageNumber,
    } = useContext(TodosStateContext);
    const preparedPage = (currentPage: number, currentTodoListItem:TodoItem[]):TodoItem[] => currentTodoListItem
        .slice(currentPage * AMOUNT,
            currentPage * AMOUNT + AMOUNT);

    switch (todoRenderType) {
    case 'ACTIVE':
        return preparedPage(todoRenderPageNumber, itemsList.filter((item) => !item.isDone));
    case 'COMPLETED':
        return preparedPage(todoRenderPageNumber, itemsList.filter((item) => item.isDone));
    default:
        return preparedPage(todoRenderPageNumber, itemsList);
    }
};

export default useItemsToRender;
