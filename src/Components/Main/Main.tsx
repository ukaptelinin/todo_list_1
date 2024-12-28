import { FC } from 'react';
import InputNewTodo from '../InputNewTodoList/InputNewTodoList';
import TodosCardList from '../TodosCardList/TodosCardList';

const Main: FC = () => (
    <>
        <InputNewTodo />
        <TodosCardList />
    </>
);
export default Main;
