import type { FC } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import ToggleThemeButtons from '../ToggleThemeButtons/ToggleThemButtons';

const AppHeader: FC = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    TODOS
                </Typography>
                <ToggleThemeButtons />
            </Toolbar>
        </AppBar>
    </Box>
);

export default AppHeader;
