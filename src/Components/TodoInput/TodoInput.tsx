import {
    FC, FormEvent, useRef, useContext,
} from 'react';
import style from './TodoInput.module.css';
import { TodosStateContext } from '../TodosStateContextProvider/context';

const TodoInput: FC = () => {
    const AMOUNT = 5;

    const inputRef = useRef<HTMLInputElement>(null);
    const {
        itemsList, addTodo, toggleRenderType, setTodoCurrentPage,
    } = useContext(TodosStateContext);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        const formData: FormData = new FormData(event.currentTarget);
        const pageNumber = itemsList.length % AMOUNT || itemsList.length === 0
            ? (Math.floor(itemsList.length / AMOUNT))
            : Math.floor(itemsList.length / AMOUNT - 1) + 1;
        event.preventDefault();
        toggleRenderType('ALL');
        setTodoCurrentPage(pageNumber);
        if (inputRef.current) {
            addTodo({
                id: Math.random(),
                text: formData.get('text') as string,
                isDone: false,
            });
            inputRef.current.value = '';
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
