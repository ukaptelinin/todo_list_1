import { FC } from 'react';
import { Grid } from '@mui/material';
import { observer } from 'mobx-react';
import todoListStore from '../../Stores/store';
import ChangeRenderType from '../ChangeRenderType/ChangeRenderType';
import ButtonClearTodoList from '../ButtonClearTodoList/ButtonClearTodoList';

const TodoFooter: FC = () => {
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
                        <ButtonClearTodoList />
                    </Grid>
                </Grid>
            </footer>
        );
    }
    return null;
};

export default observer(TodoFooter);
