import {
    ContrastSharp,
    NightlightRoundSharp,
    WbSunnySharp,
} from '@mui/icons-material';
import ToggleButton from '@mui/material/ToggleButton/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup';
import React, { FC, useContext } from 'react';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { ThemeContext } from '../../TodosThemeContextProvider/context';

const ToggleThemeButtons: FC = () => {
    type CurrentThemeType = 'SYSTEM' | 'LIGHT' | 'DARK';

    const { todoTheme, switchTheme } = useContext(ThemeContext);
    const [alignment, setAlignment] = React.useState(todoTheme);
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: CurrentThemeType,
    ) => {
        setAlignment(newAlignment);
        switchTheme(newAlignment);
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
