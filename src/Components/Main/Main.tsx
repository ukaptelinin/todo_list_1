import { FC } from 'react';
import InputNewTodo from '../InputNewTodo/InputNewTodo';
import TodosCardList from '../TodosCardList/TodosCardList';

const Main:FC = () => (
    <>
        <InputNewTodo />
        <TodosCardList />
    </>
);
export default Main;
