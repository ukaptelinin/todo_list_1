import { useContext } from 'react';
import {
    TodosStateContext, TodoItem, AMOUNT,
} from '../TodosStateContextProvider/context';

const usePaginatioNcountPages = (): number => {
    const {
        itemsList, todoRenderType,
    } = useContext(TodosStateContext);
    let countPages: number;

    let itemsGroup: TodoItem[] = [];

    switch (todoRenderType) {
    case 'ACTIVE':
        itemsGroup = itemsList.filter((item) => !item.isDone);
        countPages = Math.ceil(itemsGroup.length / AMOUNT);
        break;
    case 'COMPLETED':
        itemsGroup = itemsList.filter((item) => item.isDone);
        countPages = Math.ceil(itemsGroup.length / AMOUNT);
        break;
    default:
        itemsGroup = itemsList;
        countPages = Math.ceil(itemsGroup.length / AMOUNT);
    }
    return countPages;
};

export default usePaginatioNcountPages;
