import { FC } from 'react';
import { Routes, Route } from 'react-router';
import Main from '../Main/Main';
import TodoListPage from '../TodoListPage/TodoListPage';
import { MAIN_PATH } from '../../constants';

const RootRoutes: FC = () => (
    <Routes>
        <Route path={MAIN_PATH} Component={Main} />
        <Route path="/list/:id" Component={TodoListPage} />
    </Routes>
);
export default RootRoutes;
