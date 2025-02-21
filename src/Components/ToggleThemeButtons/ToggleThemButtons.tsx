import {
    ContrastSharp,
    NightlightRoundSharp,
    WbSunnySharp,
} from '@mui/icons-material';
import ToggleButton from '@mui/material/ToggleButton/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup';
import React, { FC, useContext } from 'react';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import {
    SwitchThemeContext,
    TodoThemeType,
} from '../../TodosThemeContextProvider/context';

const ToggleThemeButtons: FC = () => {
    const { themeType, switchTheme } = useContext(SwitchThemeContext);
    const [alignment, setAlignment] = React.useState(themeType);
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: TodoThemeType | null,
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            switchTheme(newAlignment);
        }
    };

    return (
        <ToggleButtonGroup
            aria-label="Medium sizes"
            value={alignment}
            exclusive
            onChange={handleChange}
        >
            <Tooltip title="System theme">
                <ToggleButton value="system">
                    <ContrastSharp />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Light theme">
                <ToggleButton value="light">
                    <WbSunnySharp />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Dark theme">
                <ToggleButton value="dark">
                    <NightlightRoundSharp />
                </ToggleButton>
            </Tooltip>
        </ToggleButtonGroup>
    );
};

export default ToggleThemeButtons;
