import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import useTodosTheme from '../Hooks/useTodoTheme';
import getTodoListPriorityColor from '../utils/getTodoListPriorityColor';

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
                <Box sx={{ minWidth: 110 }}>
                    <FormControl fullWidth>
                        <InputLabel id={SELECT_PRIORITY_LABEL}>
                            Приоритет
                        </InputLabel>
                        <Tooltip
                            title="Выберите приоритет задачи"
                            placement="top-start"
                        >
                            <Select
                                sx={{ width: 110 }}
                                {...field}
                                labelId={SELECT_PRIORITY_LABEL}
                                label="Приоритет"
                                onMouseDown={(e) =>
                                    e.stopPropagation()
                                } /*исключает срабатывание сброса режима
                                                                          редактирования элемента списка при клике
                                                                          за пределами формы*/
                            >
                                <MenuItem
                                    value="HIGH"
                                    sx={{
                                        color: getTodoListPriorityColor(
                                            'HIGH',
                                            todoTheme,
                                        ),
                                    }}
                                >
                                    ВЫСШИЙ
                                </MenuItem>
                                <MenuItem
                                    value="MEDIUM"
                                    sx={{
                                        color: getTodoListPriorityColor(
                                            'MEDIUM',
                                            todoTheme,
                                        ),
                                    }}
                                >
                                    СРЕДНИЙ
                                </MenuItem>
                                <MenuItem
                                    value="LOW"
                                    sx={{
                                        color: getTodoListPriorityColor(
                                            'LOW',
                                            todoTheme,
                                        ),
                                    }}
                                >
                                    НИЗКИЙ
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
