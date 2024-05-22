import type { FC } from 'react';
import {
    BrowserRouter,
} from 'react-router-dom';
import { Container, Paper } from '@mui/material';

import TodosStateContext, { todoListStore } from './Components/TodosStateContext/context';
import TodoPagination from './Components/TodoPagination/TodoPagination';
import TodoHeader from './Components/TodoHeader/TodoHeader';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import TodoFooter from './Components/TodoFooter/TodoFooter';

const App: FC = () => (

    <TodosStateContext.Provider value={todoListStore}>
        <BrowserRouter>
            <Container maxWidth="sm" style={{ padding: '10px' }}>
                <Paper>
                    <TodoHeader />
                    <TodoInput />
                    <TodoList />
                    <TodoPagination />
                    <TodoFooter />
                </Paper>
            </Container>
        </BrowserRouter>
    </TodosStateContext.Provider>
);

export default App;
