import { useContext, FC, JSX } from 'react';
import { TodosStateContext } from '../TodosStateContextProvider/context';
import style from './TodoPagination.module.css';
import DirectPaginationButton from './DirectPaginationButton/DirectPaginationButton';
import NumberPaginationButton from './NumberPaginationButton/NumberPaginationButton';

const TodoPagination: FC = () => {
    const AMOUNT: number = 5;

    const { itemsList } = useContext(TodosStateContext);
    const createButtonList = ():JSX.Element[] => {
        const numBerButtomList: JSX.Element[] = [];
        for (let i: number = 1; i <= (Math.ceil(itemsList.length / AMOUNT)); i++) {
            numBerButtomList.push(<NumberPaginationButton numberButton={i} />);
        }
        return numBerButtomList;
    };

    if (itemsList.length > 0) {
        return (
            <div className={style.pagination}>
                <DirectPaginationButton direction="LEFT" />
                <ul className={style['buttons-list']}>
                    {createButtonList()}
                </ul>
                <DirectPaginationButton direction="RIGHT" />
            </div>
        );
    }
    return null;
};

export default TodoPagination;
