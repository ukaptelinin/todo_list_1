import { useContext, CSSProperties } from 'react';
import { TodoListPriorityType } from '../Stores/TodoListStore';
import { ThemeContext } from '../TodosThemeContextProvider/context';

type RecordType = Record<TodoListPriorityType, CSSProperties>;

const useTodoListItemPriorityColor = (
    priority: TodoListPriorityType,
): string => {
    const { todoTheme } = useContext(ThemeContext);

    const PRIORITY_COLOR_TABLE: RecordType = {
        HIGH: todoTheme.custom.highPriority,
        MEDIUM: todoTheme.custom.mediumPriority,
        LOW: todoTheme.custom.lowPriority,
        NONE: todoTheme.custom.nonePriority,
    };

    return PRIORITY_COLOR_TABLE[priority] as string;
};

export default useTodoListItemPriorityColor;
