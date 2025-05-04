import { FC, useEffect, useRef, useState } from 'react';
import {
    Box,
    Dialog,
    Fade,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import useTodoListStore from '../../Hooks/useTodoListStore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MAIN_PATH } from '../../constants';
import { Link } from 'react-router-dom';
import EditToDoListTitle from '../EditToDoListTitle/EditToDoListTitle';

const TodoHeader: FC = () => {
    const todoListStore = useTodoListStore();
    const [showEditButton, setShowEditButton] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleMouseEnter = () => {
        setShowEditButton(true);
    };

    const handleMouseLeave = () => {
        setShowEditButton(false);
    };

    const handleEditClick = () => {
        setIsDialogOpen(true);
        setShowEditButton(false);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <header>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    py: 1,
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
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
                        minWidth: 0,
                        textAlign: 'center',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'inline-flex',
                            maxWidth: '60%', // Ограничиваем максимальную ширину
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                display: 'inline-block',
                                maxWidth: '100%',
                            }}
                        >
                            {todoListStore.title}
                        </Typography>
                        <Fade in={showEditButton}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: '-10px',
                                }}
                            >
                                <Tooltip title="Редактировать" arrow>
                                    <IconButton
                                        onClick={handleEditClick}
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            right: '-36px',
                                            top: 0,
                                            backgroundColor: 'blue',
                                            boxShadow: 1,
                                        }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Fade>
                    </Box>
                    <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                        <EditToDoListTitle
                            toggleEditMode={setIsDialogOpen}
                            title={todoListStore.title}
                        />
                    </Dialog>
                </Box>
            </Box>
        </header>
    );
};

export default TodoHeader;
