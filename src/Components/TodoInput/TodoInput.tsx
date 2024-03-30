import {
    FC, FormEvent, useRef, useContext,
} from 'react';
import style from './TodoInput.module.css';
import { TodosStateContext, AMOUNT } from '../TodosStateContextProvider/context';

const calculatePageNumber = (currentPageNumber: number,
    itemsCount: number): number => (itemsCount % AMOUNT > 0
    ? Math.floor(itemsCount / AMOUNT)
    : currentPageNumber + 1);

const TodoInput: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        addTodo, toggleRenderType, setTodoCurrentPage, itemsList, todoRenderPageNumber,
    } = useContext(TodosStateContext);
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        const formData: FormData = new FormData(event.currentTarget);

        event.preventDefault();
        toggleRenderType('ALL');

        if (inputRef.current) {
            addTodo({
                id: Math.random(),
                text: formData.get('text') as string,
                isDone: false,
            });
            inputRef.current.value = '';
        }
        if (itemsList.length > 0) {
            setTodoCurrentPage(calculatePageNumber(todoRenderPageNumber, itemsList.length));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="text"
                    className={style['todo-input']}
                    ref={inputRef}
                    placeholder="Что надо сделать?"
                />
            </form>
        </div>
    );
};

export default TodoInput;
