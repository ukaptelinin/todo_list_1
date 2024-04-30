import { FC } from 'react';
import { Typography } from '@mui/material';

const TodoHeader: FC = () => (
    <header>
        <Typography variant="h1" align="center" sx={{ mb: 3 }}>Список дел</Typography>
    </header>
);

export default TodoHeader;
