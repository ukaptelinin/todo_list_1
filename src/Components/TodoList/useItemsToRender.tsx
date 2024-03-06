import { useContext } from 'react';
import { TodosStateContext, TodoItem } from '../TodosStateContextProvider/context';

const useItemsToRender = (): TodoItem[] => {
    const { itemsList, todoRenderType } = useContext(TodosStateContext);
    switch (todoRenderType) {
    case 'ACTIVE':
        return itemsList.filter((item) => !item.isDone);
    case 'COMPLETED':
        return itemsList.filter((item) => item.isDone);
    default:
        return itemsList;
    }
};

export default useItemsToRender;
