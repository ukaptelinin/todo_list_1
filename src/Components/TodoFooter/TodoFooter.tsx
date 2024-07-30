import { FC } from 'react';
import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import ChangeRenderType from '../ChangeRenderType/ChangeRenderType';
import useTodoListStore from '../../Hooks/useTodoListStore';
<<<<<<< HEAD
import ClearCompletedButton from '../ClearCompletedButton/ClearCompletedButton';
=======
import ClearTodoListComletedButton from '../ClearTodoListComletedButton/ClearTodoListComletedButton';
>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b

const TodoFooter: FC = () => {
    const todoListStore = useTodoListStore();
    if (todoListStore.itemList.length > 0) {
        return (
            <footer>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-around"
                    sx={{ mt: 2, mb: 2 }}
                >
                    <Grid item>
                        <ChangeRenderType renderType="ALL" title="ALL" />
                    </Grid>
                    <Grid item>
                        <ChangeRenderType renderType="ACTIVE" title="ACTIVE" />
                    </Grid>
                    <Grid item>
                        <ChangeRenderType renderType="COMPLETED" title="COMPLETED" />
                    </Grid>
                    <Grid item>
<<<<<<< HEAD
                        <ClearCompletedButton />
=======
                        <ClearTodoListComletedButton />
>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b
                    </Grid>
                </Grid>
            </footer>
        );
    }
    return null;
};

export default observer(TodoFooter);
