import { useContext, FC } from 'react';
import style from './ChangeRenderType.module.css';
import { TodosStateContext, TodoRenderType } from '../TodosStateContextProvider/context';

const ChangeRenderType: FC<{ renderType: TodoRenderType, title: string }> = ({ renderType, title }) => {
    const { toggleRenderType, setTodoCurrentPage } = useContext(TodosStateContext);
    const handleOnClick = (): void => {
        toggleRenderType(renderType);
        setTodoCurrentPage(0);
    };

    return (
        <button
            type="button"
            className={style['type-button']}
            onClick={handleOnClick}
        >
            {title}
        </button>
    );
};

export default ChangeRenderType;
