import { FC } from 'react';
import { Routes, Route } from 'react-router';
import Main from '../Main/Main';
import TodoListPage from '../TodoListPage/TodoListPage';

const RootRoutes :FC = () => (
    <Routes>
        <Route path="/todo_list_1" Component={Main} />
        <Route path="/todoitem/:id" Component={TodoListPage} />
    </Routes>
);
export default RootRoutes;
