import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';
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
            <>
                <InputLabel id="demo-simple-select-label">Приоритет</InputLabel>
                <Select
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
            </>
        )}
    />
);
export default SelectPriority;
