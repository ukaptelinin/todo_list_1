import { Delete } from '@mui/icons-material';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import IconButton from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography/Typography';
import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import TodolistDialogDeleting from './TodolistDialogDeleting/TodolistDialogDeleting';
import useModalState from '../../../Hooks/useModalState';
import { todosStore } from '../../TodosStateContext/TodosStateContext';
import TodosCardItemList from './TodosCardItemList/TodosCardItemList';
import TodoListStateContext from '../../TodosStateContext/TodoListStateContext';
import useTodoListStoreOfId from './useTodoListStoreOfId';
import useTodosTheme from '../../../Hooks/useTodoTheme';
import EditToDoListTitle from '../../EditToDoListTitle/EditToDoListTitle';
import { Dialog, Fade, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const TodosCardItem: FC<{ id: number; title: string }> = ({ id, title }) => {
    const pageTodoListStore = useTodoListStoreOfId(id);
    const [showEditButton, setShowEditButton] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleMouseEnter = () => {
        setShowEditButton(true);
    };

    const handleMouseLeave = () => {
        setShowEditButton(false);
    };

    const handleEditClick = (event: React.MouseEvent<HTMLElement>) => {
        setIsDialogOpen(true);
        setShowEditButton(false);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const { open, openModal, clouseModal } = useModalState(false);
    const todoTheme = useTodosTheme();
    const url = `/list/${id}`;
    const modalTitle = 'Вы действительно хотите удалить список на всегда?';

    const handleOpenModal = (event: React.MouseEvent): void => {
        event.preventDefault();
        openModal();
    };

    const deleteList = (): void => {
        todosStore.deleteTodoList(id);
        clouseModal();
    };

    const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <TodoListStateContext.Provider value={pageTodoListStore}>
            <>
                <Card
                    sx={{
                        maxWidth: 250,
                        alignContent: 'center',
                        backgroundColor:
                            todoTheme.palette.grey[
                                todoTheme.palette.mode === 'dark' ? 800 : 300
                            ],
                    }}
                >
                    <CardContent>
                        <div
                            style={{
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Typography
                                sx={{
                                    flex: 1,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    pr: 4,
                                }}
                                color="text.secondary"
                                variant="h5"
                            >
                                {title}
                            </Typography>

                            <Fade in={showEditButton}>
                                <Tooltip title="Редактировать" arrow>
                                    <IconButton
                                        onClick={handleEditClick}
                                        size="small"
                                        sx={{
                                            position: 'absolute',
                                            right: 0,
                                            backgroundColor:
                                                todoTheme.palette.info.light,
                                            boxShadow: 1,
                                        }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                            </Fade>
                            <Dialog
                                open={isDialogOpen}
                                onClose={handleDialogClose}
                            >
                                <EditToDoListTitle
                                    toggleEditMode={setIsDialogOpen}
                                    title={title}
                                />
                            </Dialog>
                        </div>
                        <Link to={url} style={{ textDecoration: 'none' }}>
                            <div onClick={stopPropagation}>
                                <TodosCardItemList />
                                <IconButton
                                    aria-label="delete"
                                    size="small"
                                    sx={{ pl: 0 }}
                                    onClick={handleOpenModal}
                                >
                                    <Delete />
                                </IconButton>
                            </div>
                        </Link>
                    </CardContent>
                </Card>

                <TodolistDialogDeleting
                    open={open}
                    confirm={deleteList}
                    cancel={clouseModal}
                    title={modalTitle}
                />
            </>
        </TodoListStateContext.Provider>
    );
};

export default observer(TodosCardItem);
