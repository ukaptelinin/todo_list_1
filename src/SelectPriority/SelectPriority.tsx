import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

const SelectPriority: FC<{ control: any; name: string }> = ({
    control,
    name,
}) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <Box sx={{ minWidth: 120, my: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Приоритет
                    </InputLabel>
                    <Tooltip title="Enter task status" placement="top-start">
                        <Select
                            sx={{ width: 140 }}
                            {...field}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Приоритет"
                        >
                            <MenuItem value="HIGH" sx={{ color: 'crimson' }}>
                                HIGH
                            </MenuItem>
                            <MenuItem value="MEDIUM" sx={{ color: 'green' }}>
                                MEDIUM
                            </MenuItem>
                            <MenuItem value="LOW" sx={{ color: 'darkblue' }}>
                                LOW
                            </MenuItem>
                        </Select>
                    </Tooltip>
                </FormControl>
            </Box>
        )}
    />
);
export default SelectPriority;
