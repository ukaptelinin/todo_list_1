import useTodoListStore from '../../Hooks/useTodoListStore';
import { TodoListItem } from '../../Stores/TodoListStore';
import { AMOUNT } from '../../constants';

const usePaginatioNcountPages = (): number => {
    let countPages: number;
    const todoListStore = useTodoListStore();

    let itemsGroup: TodoListItem[] = [];

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
