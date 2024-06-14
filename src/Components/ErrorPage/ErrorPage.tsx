import type { FC } from 'react';

import {
    Button,
    Stack,
    Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const ErrorPage: FC = () => {
    const { text } = useParams();
    return (
        <>
            <Typography variant="h1" color="red" align="center" marginTop="50">
                404
            </Typography>
            <Typography variant="h3" color="red" align="center">
                {text}
            </Typography>
            <Stack direction="row" alignItems="right">
                <Button variant="outlined" style={{ marginRight: '5px', top: 5, marginLeft: 800 }}>
                    <Link to="/todo_list_1" style={{ textDecoration: 'none', color: 'inherit' }}>CLOSE</Link>
                </Button>
            </Stack>
        </>

    );
};
export default ErrorPage;
