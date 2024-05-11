import type { FC } from 'react';
import {
    BrowserRouter,
} from 'react-router-dom';
import { Container, Paper } from '@mui/material';
import TodoHeader from './Components/TodoHeader/TodoHeader';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoList from './Components/TodoList/TodoList';
import TodoFooter from './Components/TodoFooter/TodoFooter';
import TodoPagination from './Components/TodoPagination/TodoPagination';

const App: FC = () => (

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

);

export default App;
