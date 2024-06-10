import type { FC } from 'react';

import {
    AppBar, Box, Toolbar,
    Typography,
} from '@mui/material';

const AppHeader: FC = () => (

    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    TODOS
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>

);

export default AppHeader;
