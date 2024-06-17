import type { FC } from 'react';
import { Typography } from '@mui/material';

const ErrorPage: FC<{ errorCode: string, errorMessage:string }> = ({ errorCode, errorMessage }) => (
    <>
        <Typography variant="h1" color="red" align="center" marginTop="50">
            {errorCode}
        </Typography>
        <Typography variant="h3" color="red" align="center">
            {errorMessage}
        </Typography>
    </>

);
export default ErrorPage;
