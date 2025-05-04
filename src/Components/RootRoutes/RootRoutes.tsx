import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import TodoListPage from '../TodoListPage/TodoListPage';
import { MAIN_PATH } from '../../constants';

const RootRoutes: FC = () => (
    <Routes>
        <Route path={MAIN_PATH} element={<Main />} />
        <Route path={`${MAIN_PATH}/list/:id`} element={<TodoListPage />} />
    </Routes>
);
export default RootRoutes;
