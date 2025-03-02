import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import useTodoListItemPriorityColor from '../Hooks/useTodoListItemPriorityColor';
import useTodosTheme from '../Hooks/useTodoTheme';
import selectTodoListPriorityColor from '../Hooks/useTodoListItemPriorityColor';

const SELECT_PRIORITY_LABEL = 'select-priority-label';

const SelectPriority: FC<{ control: any; name: string }> = ({
    control,
    name,
}) => {
    const todoTheme = useTodosTheme();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Box sx={{ minWidth: 120, my: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id={SELECT_PRIORITY_LABEL}>
                            Приоритет
                        </InputLabel>
                        <Tooltip
                            title="Выберите приоритет задачи"
                            placement="top-start"
                        >
                            <Select
                                sx={{ width: 140 }}
                                {...field}
                                labelId={SELECT_PRIORITY_LABEL}
                                label="Приоритет"
                            >
                                <MenuItem
                                    value="HIGH"
                                    sx={{
                                        color: selectTodoListPriorityColor(
                                            'HIGH',
                                            todoTheme,
                                        ),
                                    }}
                                >
                                    HIGH
                                </MenuItem>
                                <MenuItem
                                    value="MEDIUM"
                                    sx={{
                                        color: selectTodoListPriorityColor(
                                            'MEDIUM',
                                            todoTheme,
                                        ),
                                    }}
                                >
                                    MEDIUM
                                </MenuItem>
                                <MenuItem
                                    value="LOW"
                                    sx={{
                                        color: selectTodoListPriorityColor(
                                            'LOW',
                                            todoTheme,
                                        ),
                                    }}
                                >
                                    LOW
                                </MenuItem>
                            </Select>
                        </Tooltip>
                    </FormControl>
                </Box>
            )}
        />
    );
};
export default SelectPriority;
