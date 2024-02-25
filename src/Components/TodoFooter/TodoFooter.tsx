import { useContext, FC } from 'react';
import style from './TodoFooter.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';
import ChangeRenderType from '../ChangeRenderType/ChangeRenderType';
import ButtonClearTodoList from '../ButtonClearTodoList/ButtonClearTodoList';

const TodoFooter: FC = () => {
    const { itemsList } = useContext(TodosStateContext);
    if (itemsList.length > 0) {
        return (
            <footer className={style.footer}>
                <div className={style['item-number']}>
                    1 item
                </div>
                <div className={style['buttons-block']}>
                    <ChangeRenderType renderType="ALL" title="ALL" />
                    <ChangeRenderType renderType="ACTIVE" title="Active" />
                    <ChangeRenderType renderType="COMPLETED" title="Completed" />
                </div>
                <div className={style['reset-button']}>
                    <ButtonClearTodoList />
                </div>
            </footer>
        );
    }
    return null;
};

export default TodoFooter;
