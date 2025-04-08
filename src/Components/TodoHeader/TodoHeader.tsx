import { FC, useState } from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import useTodoListStore from '../../Hooks/useTodoListStore';
import useTodosTheme from '../../Hooks/useTodoTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MAIN_PATH } from '../../constants';
import { Link } from 'react-router-dom';

const TodoHeader: FC = () => {
    const [isEditTitle, setEditTitle] = useState(false);
    const handleOnClick = (): void => {
        setEditTitle(true);
    };
    const todoListStore = useTodoListStore();
    const todoTheme = useTodosTheme();
    return (
        <header>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center', // Выравниваем элементы по вертикали
                    width: '100%',
                    py: 1,
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                    }}
                >
                    <Link
                        to={MAIN_PATH}
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            padding: '0',
                        }}
                    >
                        <Tooltip title="Назад" placement="right">
                            <IconButton
                                size="large"
                                color="primary"
                                sx={{ px: 0 }}
                            >
                                <ArrowBackIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            display: 'inline-block',
                        }}
                        onClick={handleOnClick}
                    >
                        {todoListStore.title}
                    </Typography>
                </Box>
            </Box>
        </header>
    );
};

export default TodoHeader;
