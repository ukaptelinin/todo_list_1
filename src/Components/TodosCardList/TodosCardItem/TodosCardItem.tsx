import { Delete, Edit } from '@mui/icons-material';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardContent from '@mui/material/CardContent/CardContent';
import IconButton from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography/Typography';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { TodoListStore } from '../../../Stores/TodoListStore';

const TodosCardItem:FC<TodoListStore> = ({ id, title }) => {
    const URL = `/todoitem/${id}`;
    return (

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
                <IconButton aria-label="delete" size="small">
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
};
export default observer(TodosCardItem);
