import {
    ContrastSharp,
    NightlightRoundSharp,
    WbSunnySharp,
} from '@mui/icons-material';
import ToggleButton from '@mui/material/ToggleButton/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup';
import React, { FC, useContext } from 'react';
import { CurrentThemeType } from '../../Stores/TodosStore';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { TodosThemeStateContext } from '../../TodosThemeContextProvider/context';

const ToggleThemeButtons: FC = () => {
    const { todoTheme, toggleTheme } = useContext(TodosThemeStateContext);
    const [alignment, setAlignment] = React.useState(todoTheme);
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: CurrentThemeType,
    ) => {
        setAlignment(newAlignment);
        toggleTheme(newAlignment);
        console.log(newAlignment);
        console.log(todoTheme);
    };

    return (
        <ToggleButtonGroup
            aria-label="Medium sizes"
            value={alignment}
            exclusive
            onChange={handleChange}
        >
            <Tooltip title="System theme">
                <ToggleButton value="SYSTEM">
                    <ContrastSharp />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Light theme">
                <ToggleButton value="LIGHT">
                    <WbSunnySharp />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Dark theme">
                <ToggleButton value="DARK">
                    <NightlightRoundSharp />
                </ToggleButton>
            </Tooltip>
        </ToggleButtonGroup>
    );
};

export default ToggleThemeButtons;
