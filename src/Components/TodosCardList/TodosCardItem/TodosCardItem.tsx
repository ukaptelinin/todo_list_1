import { Delete, Edit } from '@mui/icons-material';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import IconButton from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography/Typography';
import { FC, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import TodolistDialogDeleting from './TodolistDialogDeleting/TodolistDialogDeleting';
import useModalState from '../../../Hooks/useModalState';
import { todosStore } from '../../TodosStateContext/TodosStateContext';
import TodosCardItemList from './TodosCardItemList/TodosCardItemList';
import TodoListStateContext from '../../TodosStateContext/TodoListStateContext';
import useTodoListStoreOfId from './useTodoListStoreOfId';
import { ThemeContext } from '../../../TodosThemeContextProvider/context';

const TodosCardItem: FC<{ id: number; title: string }> = ({ id, title }) => {
    const pageTodoListStore = useTodoListStoreOfId(id);
    const { open, openModal, clouseModal } = useModalState(false);
    const { todoTheme } = useContext(ThemeContext);
    const url = `/list/${id}`;
    const modalTitle = 'Вы действительно хотите удалить список на всегда?';

    const handleDeleteOnClick = (): void => {
        todosStore.deleteTodoList(id);
        clouseModal();
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
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            {title}
                        </Typography>
                        <TodosCardItemList />
                    </CardContent>
                    <CardActions>
                        <Link to={url}>
                            <Edit color={'info'} />
                        </Link>
                        <IconButton
                            aria-label="delete"
                            size="small"
                            onClick={openModal}
                        >
                            <Delete />
                        </IconButton>
                    </CardActions>
                </Card>
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
