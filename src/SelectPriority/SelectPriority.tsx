import Box from '@mui/material/Box/Box';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Select from '@mui/material/Select/Select';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { FC, useContext } from 'react';
import { Controller } from 'react-hook-form';
import { ThemeContext } from '../TodosThemeContextProvider/context';

const SelectPriority: FC<{ control: any; name: string }> = ({
    control,
    name,
}) => {
    const { todoTheme } = useContext(ThemeContext);
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Box sx={{ minWidth: 120, my: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Приоритет
                        </InputLabel>
                        <Tooltip
                            title="Выберите приоритет задачи"
                            placement="top-start"
                        >
                            <Select
                                sx={{ width: 140 }}
                                {...field}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Приоритет"
                            >
                                <MenuItem
                                    value="HIGH"
                                    sx={todoTheme.custom.highPriority}
                                >
                                    HIGH
                                </MenuItem>
                                <MenuItem
                                    value="MEDIUM"
                                    sx={todoTheme.custom.mediumPriority}
                                >
                                    MEDIUM
                                </MenuItem>
                                <MenuItem
                                    value="LOW"
                                    sx={todoTheme.custom.lowPriority}
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
