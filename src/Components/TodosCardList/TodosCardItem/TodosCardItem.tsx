import { Delete } from '@mui/icons-material';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import IconButton from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography/Typography';
import { FC, useEffect, useRef, useState } from 'react';
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

const TodosCardItem: FC<{ id: number; title: string }> = ({ id, title }) => {
    const pageTodoListStore = useTodoListStoreOfId(id);

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
    }, [title, isEditTitle]);

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

    const onClickTitle = (event: React.MouseEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        setEditTitle(true);
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
                        {isEditTitle ? (
                            <EditToDoListTitle
                                toggleEditMode={setEditTitle}
                                title={title}
                                width={typographyStyles.width}
                                fontSize={typographyStyles.fontSize}
                            />
                        ) : (
                            <Typography
                                color="text.secondary"
                                variant="h5"
                                ref={typographyRef}
                                onClick={onClickTitle}
                            >
                                {title}
                            </Typography>
                        )}
                        <Link to={url} style={{ textDecoration: 'none' }}>
                            <div onClick={stopPropagation}>
                                <TodosCardItemList />
                                <IconButton
                                    aria-label="delete"
                                    size="small"
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
