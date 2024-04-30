import type { FC } from 'react';
import {
    BrowserRouter,
} from 'react-router-dom';
import { Container, Paper } from '@mui/material';
import TodosStateContextProvider from './Components/TodosStateContextProvider/context';
import TodoHeader from './Components/TodoHeader/TodoHeader';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import TodoFooter from './Components/TodoFooter/TodoFooter';
import TodoPagination from './Components/TodoPagination/TodoPagination';

const App: FC = () => (
    <TodosStateContextProvider>
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
    </TodosStateContextProvider>
);

export default App;
