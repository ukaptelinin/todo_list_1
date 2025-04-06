import { FC } from 'react';
import InputNewTodo from '../InputNewTodoList/InputNewTodoList';
import TodosCardList from '../TodosCardList/TodosCardList';
import { Box } from '@mui/material';

const Main: FC = () => (
    <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        gap={2}
        sx={{ px: 3, py: 2 }}
    >
        <InputNewTodo />
        <TodosCardList />
    </Box>
);
export default Main;
