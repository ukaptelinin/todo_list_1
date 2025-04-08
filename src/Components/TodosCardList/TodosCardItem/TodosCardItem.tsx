import { Delete } from '@mui/icons-material';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import IconButton from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography/Typography';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import TodolistDialogDeleting from './TodolistDialogDeleting/TodolistDialogDeleting';
import useModalState from '../../../Hooks/useModalState';
import { todosStore } from '../../TodosStateContext/TodosStateContext';
import TodosCardItemList from './TodosCardItemList/TodosCardItemList';
import TodoListStateContext from '../../TodosStateContext/TodoListStateContext';
import useTodoListStoreOfId from './useTodoListStoreOfId';
import useTodosTheme from '../../../Hooks/useTodoTheme';

const TodosCardItem: FC<{ id: number; title: string }> = ({ id, title }) => {
    const pageTodoListStore = useTodoListStoreOfId(id);
    const { open, openModal, clouseModal } = useModalState(false);
    const todoTheme = useTodosTheme();
    const url = `/list/${id}`;
    const modalTitle = 'Вы действительно хотите удалить список на всегда?';

    const handleOpenModal = (event: React.MouseEvent): void => {
        event.preventDefault();
        openModal();
    };

    const handleDeleteOnClick = (): void => {
        todosStore.deleteTodoList(id);
        clouseModal();
    };

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <TodoListStateContext.Provider value={pageTodoListStore}>
            <>
                <Link to={url} style={{ textDecoration: 'none' }}>
                    <Card
                        sx={{
                            maxWidth: 250,
                            alignContent: 'center',
                            backgroundColor:
                                todoTheme.palette.grey[
                                    todoTheme.palette.mode === 'dark'
                                        ? 800
                                        : 300
                                ],
                        }}
                    >
                        <CardContent>
                            <Typography
                                color="text.secondary"
                                variant="h5"
                                gutterBottom
                            >
                                {title}
                            </Typography>
                            <div onClick={handleOnClick}>
                                <TodosCardItemList />
                            </div>
                        </CardContent>
                        <CardActions>
                            <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={handleOpenModal}
                            >
                                <Delete />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Link>

                <TodolistDialogDeleting
                    open={open}
                    confirm={handleDeleteOnClick}
                    cancel={clouseModal}
                    title={modalTitle}
                />
            </>
        </TodoListStateContext.Provider>
    );
};

export default observer(TodosCardItem);
