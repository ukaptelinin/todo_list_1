import useTodoListStore from '../../Hooks/useTodoListStore';
import { TodoItem } from '../../Stores/store';
import { AMOUNT } from '../../constants';

const usePaginatioNcountPages = (): number => {
    const todoListStore = useTodoListStore();
    let countPages: number;

    let itemsGroup: TodoItem[] = [];

    switch (todoListStore.todoRenderType) {
    case 'ACTIVE':
        itemsGroup = todoListStore.itemList.filter((item) => !item.isDone);
        countPages = Math.ceil(itemsGroup.length / AMOUNT);
        break;
    case 'COMPLETED':
        itemsGroup = todoListStore.itemList.filter((item) => item.isDone);
        countPages = Math.ceil(itemsGroup.length / AMOUNT);
        break;
    default:
        itemsGroup = todoListStore.itemList;
        countPages = Math.ceil(itemsGroup.length / AMOUNT);
    }
    return countPages;
};

export default usePaginatioNcountPages;
