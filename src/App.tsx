import type { FC } from 'react';
import {
    BrowserRouter,
} from 'react-router-dom';
import style from './App.module.css';
import TodosStateContextProvider from './Components/TodosStateContextProvider/context';
import TodoHeader from './Components/TodoHeader/TodoHeader';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import TodoFooter from './Components/TodoFooter/TodoFooter';
import TodoPagination from './Components/TodoPagination/TodoPagination';

const App: FC = () => (
    <TodosStateContextProvider>
        <BrowserRouter>
            <div
                className={style['app-wrapper']}
            >
                <TodoHeader />
                <TodoInput />
                <TodoList />
                <TodoFooter />
                <TodoPagination />
            </div>
        </BrowserRouter>
    </TodosStateContextProvider>
);

export default App;
