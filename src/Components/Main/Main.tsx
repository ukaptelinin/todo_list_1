import { FC } from 'react';
import InputNewTodo from '../InputNewTodoList/InputNewTodoLisr';
import TodosCardList from '../TodosCardList/TodosCardList';

const Main:FC = () => (
    <>
        <InputNewTodo />
        <TodosCardList />
    </>
);
export default Main;
