import { Delete, Edit } from '@mui/icons-material';
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

const TodosCardItem:FC<{ id:number, title:string }> = ({ id, title }) => {
    const { open, openModal, clouseModal } = useModalState(false);
    const URL = `/list/${id}`;
    const TITLE = 'Вы действительно хотите удалить список на всегда?';

    const handleClickOpen = ():void => {
        openModal();
    };

    const handleClose = ():void => {
        clouseModal();
    };

    const handleDeleteOnClick = (): void => {
        todosStore.deleteTodoList(id);
        clouseModal();
    };

    return (
        <>
            <Card sx={{
                maxWidth: 250, alignContent: 'center', backgroundColor: 'Lavender',
            }}
            >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={URL}>
                        <Edit />
                    </Link>
                    <IconButton aria-label="delete" size="small" onClick={handleClickOpen}>
                        <Delete />
                    </IconButton>
                </CardActions>
            </Card>
            <TodolistDialogDeleting
                open={open}
                confirm={handleDeleteOnClick}
                cancel={handleClose}
                title={TITLE}
            />

        </>
    );
};
export default observer(TodosCardItem);
