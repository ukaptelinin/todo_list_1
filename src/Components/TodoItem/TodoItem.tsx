import { FC } from 'react';
import Container from '@mui/material/Container/Container';
import Paper from '@mui/material/Paper/Paper';
import Stack from '@mui/material/Stack/Stack';
import Button from '@mui/material/Button/Button';
import { Link } from 'react-router-dom';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import TodoPagination from '../TodoPagination/TodoPagination';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoListStateContext from '../TodosStateContext/TodoListStateContext';
import useCurrentTodoListStore from './useCurrentTodoListStore';
import TodoHeader from '../TodoHeader/TodoHeader';

const TodoItem:FC = () => (
    <TodoListStateContext.Provider value={useCurrentTodoListStore()}>
        <Container maxWidth="sm" style={{ padding: '10px' }}>
            <Paper>
                <TodoHeader />
                <TodoInput />
                <TodoList />
                <TodoPagination />
                <TodoFooter />
            </Paper>
            <Stack direction="row" alignItems="right">
                <Button variant="outlined" style={{ marginRight: '5px' }}>
                    <Link to="/todo_list_1" style={{ textDecoration: 'none', color: 'inherit' }}>CLOSE</Link>
                </Button>
            </Stack>
        </Container>
    </TodoListStateContext.Provider>
);
export default TodoItem;
