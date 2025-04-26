import { FC, useEffect, useRef, useState } from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import useTodoListStore from '../../Hooks/useTodoListStore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MAIN_PATH } from '../../constants';
import { Link } from 'react-router-dom';
import EditToDoListTitle from '../EditToDoListTitle/EditToDoListTitle';

const TodoHeader: FC = () => {
    const todoListStore = useTodoListStore();
    const [isEditTitle, setEditTitle] = useState(false);
    const [typographyStyles, setTypographyStyles] = useState({
        width: 'auto',
        fontSize: '2rem',
    });
    const typographyRef = useRef(null);
    useEffect(() => {
        if (typographyRef.current) {
            const computedStyles = window.getComputedStyle(
                typographyRef.current,
            );
            setTypographyStyles({
                width: computedStyles.width,
                fontSize: computedStyles.fontSize,
            });
        }
    }, [todoListStore.title, isEditTitle]);

    const onClickTitle = (): void => {
        setEditTitle(true);
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
                        textAlign: 'center',
                    }}
                >
                    {isEditTitle ? (
                        <div style={{ display: 'inline-block' }}>
                            <EditToDoListTitle
                                toggleEditMode={setEditTitle}
                                title={todoListStore.title}
                                width={typographyStyles.width}
                                fontSize={typographyStyles.fontSize}
                            />
                        </div>
                    ) : (
                        <Typography
                            variant="h3"
                            sx={{
                                display: 'inline-block',
                            }}
                            ref={typographyRef}
                            onClick={onClickTitle}
                        >
                            {todoListStore.title}
                        </Typography>
                    )}
                </Box>
            </Box>
        </header>
    );
};

export default TodoHeader;
