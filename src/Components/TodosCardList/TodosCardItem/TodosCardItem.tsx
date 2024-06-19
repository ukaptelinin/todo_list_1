import { Delete, Edit } from '@mui/icons-material';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import IconButton from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography/Typography';
import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button/Button';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import Dialog from '@mui/material/Dialog/Dialog';
import useTodosStore from '../../../Hooks/useTodosStore';

const TodosCardItem:FC<{ id:number, title:string }> = ({ id, title }) => {
    const todosStore = useTodosStore();
    const [open, setOpen] = useState(false);
    const URL = `/list/${id}`;

    const handleClickOpen = ():void => {
        setOpen(true);
    };

    const handleClose = ():void => {
        setOpen(false);
    };

    const handleDeleteOnClick = (): void => {
        todosStore.deleteTodoList(id);
        setOpen(false);
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
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <DialogContentText variant="h6" color="red">
                        Вы действительно хотите удалить список на всегда?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleDeleteOnClick}>Да</Button>
                    <Button onClick={handleClose}>Нет</Button>
                </DialogActions>
            </Dialog>

        </>
    );
};
export default observer(TodosCardItem);
