import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import useTodoListItemPriorityColor from '../Hooks/useTodoListItemPriorityColor';

const SelectPriority: FC<{ control: any; name: string }> = ({
    control,
    name,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Box sx={{ minWidth: 120, my: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="select-priority-label">
                            Приоритет
                        </InputLabel>
                        <Tooltip
                            title="Выберите приоритет задачи"
                            placement="top-start"
                        >
                            <Select
                                sx={{ width: 140 }}
                                {...field}
                                labelId="select-priority-label"
                                label="Приоритет"
                            >
                                <MenuItem
                                    value="HIGH"
                                    sx={{
                                        color: useTodoListItemPriorityColor(
                                            'HIGH',
                                        ),
                                    }}
                                >
                                    HIGH
                                </MenuItem>
                                <MenuItem
                                    value="MEDIUM"
                                    sx={{
                                        color: useTodoListItemPriorityColor(
                                            'MEDIUM',
                                        ),
                                    }}
                                >
                                    MEDIUM
                                </MenuItem>
                                <MenuItem
                                    value="LOW"
                                    sx={{
                                        color: useTodoListItemPriorityColor(
                                            'LOW',
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
