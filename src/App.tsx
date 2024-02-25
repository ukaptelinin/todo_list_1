import type { FC } from 'react';
import style from './App.module.css';
import TodosStateContextProvider from './Components/TodosStateContextProvider/context';
import TodoHeader from './Components/TodoHeader/TodoHeader';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import TodoFooter from './Components/TodoFooter/TodoFooter';

const App: FC = () => (
    <TodosStateContextProvider>
        <div
            className={style['app-wrapper']}
        >
            <TodoHeader />
            <TodoInput />
            <TodoList />
            <TodoFooter />
        </div>
    </TodosStateContextProvider>
);

export default App;
