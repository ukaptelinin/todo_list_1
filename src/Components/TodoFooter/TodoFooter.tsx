import { FC } from 'react';
import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import ChangeRenderType from '../ChangeRenderType/ChangeRenderType';
import useTodoListStore from '../../Hooks/useTodoListStore';
import ClearCompletedButton from '../ClearCompletedButton/ClearCompletedButton';

const TodoFooter: FC = () => {
    const todoListStore = useTodoListStore();
    if (todoListStore.itemList.length > 0) {
        return (
            <footer>
                <Grid
                    container
                    width="100%"
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mt: 2, mb: 2 }}
                >
                    <Grid item>
                        <ChangeRenderType renderType="ALL" title="ВСЕ" />
                    </Grid>
                    <Grid item>
                        <ChangeRenderType
                            renderType="ACTIVE"
                            title="АКТИВНЫЕ"
                        />
                    </Grid>
                    <Grid item>
                        <ChangeRenderType
                            renderType="COMPLETED"
                            title="ВЫПОЛНЕННЫЕ"
                        />
                    </Grid>
                    <Grid item>
                        <ClearCompletedButton />
                    </Grid>
                </Grid>
            </footer>
        );
    }
    return null;
};

export default observer(TodoFooter);
