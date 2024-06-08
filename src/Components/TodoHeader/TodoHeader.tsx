import { JSX } from 'react';
import { Typography } from '@mui/material';

const TodoHeader = (titel:string): JSX.Element => (
    <header>
        <Typography variant="h1" align="center" sx={{ mb: 3 }}>{titel}</Typography>
    </header>
);

export default TodoHeader;
