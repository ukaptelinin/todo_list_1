import { TodoItem, TodoRenderType } from '../TodosStateContextProvider/context';

const useItemsToRender = (type: TodoRenderType, list: TodoItem[]): TodoItem[] => {
    switch (type) {
    case 'ACTIVE':
        return list.filter((item) => !item.isDone);
    case 'COMPLETED':
        return list.filter((item) => item.isDone);
    default:
        return list;
    }
};

export default useItemsToRender;
