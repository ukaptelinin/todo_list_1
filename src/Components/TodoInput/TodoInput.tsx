import {
    FC, FormEvent, useRef, useContext,
} from 'react';
import style from './TodoInput.module.css';
import { TodosStateContext, AMOUNT } from '../TodosStateContextProvider/context';

const TodoInput: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        itemsList, addTodo, toggleRenderType, setTodoCurrentPage, todoRenderPageNumber,
    } = useContext(TodosStateContext);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        const formData: FormData = new FormData(event.currentTarget);
        let pageNumber = itemsList.length > AMOUNT ? Math.ceil(itemsList.length / AMOUNT - 1) : 0;
        if (itemsList.length % AMOUNT === 0 && itemsList.length >= AMOUNT) {
            pageNumber = todoRenderPageNumber + 1;
        }
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
        setTodoCurrentPage(pageNumber);
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
