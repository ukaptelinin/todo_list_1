import { useContext, FC } from 'react';
import style from './ChangeRenderType.module.css';
import { TodosStateContext, TodoRenderType } from '../TodosStateContextProvider/context';
import usePageNumber from '../../Hooks/usePageNumber';

const ChangeRenderType: FC<{ renderType: TodoRenderType, title: string }> = ({ renderType, title }) => {
    const [,setPageNumber] = usePageNumber();
    const { toggleRenderType } = useContext(TodosStateContext);

    const handleOnClick = (): void => {
        toggleRenderType(renderType);
        setPageNumber(1);
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
