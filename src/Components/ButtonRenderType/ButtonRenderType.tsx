import { useContext, FC } from 'react';
import style from './ButtonRenderType.module.css';
import { TodosStateContext, TodoRenderType } from '../TodosStateContextProvider/context';

const ButtonRenderType: FC<{ typeRender: TodoRenderType, title: string }> = ({ typeRender, title }) => {
    const { toggleRenderType } = useContext(TodosStateContext);
    const handleOnClick = (): void => {
        toggleRenderType(typeRender);
    };

    return (
        <button
            type="button"
            className={style.type_button}
            onClick={handleOnClick}
        >
            {title}
        </button>
    );
};

export default ButtonRenderType;
