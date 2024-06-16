import type { FC } from 'react';
import { Typography } from '@mui/material';

const ErrorPage: FC<{ errorcode: string, errormessage:string }> = ({ errorcode, errormessage }) => (
    <>
        <Typography variant="h1" color="red" align="center" marginTop="50">
            {errorcode}
        </Typography>
        <Typography variant="h3" color="red" align="center">
            {errormessage}
        </Typography>
    </>

);
export default ErrorPage;
