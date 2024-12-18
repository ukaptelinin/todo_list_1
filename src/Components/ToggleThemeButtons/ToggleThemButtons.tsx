import {
    ContrastSharp,
    NightlightRoundSharp,
    WbSunnySharp,
} from '@mui/icons-material';
import ToggleButton from '@mui/material/ToggleButton/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup';
import React, { FC } from 'react';
import useTodosStore from '../../Hooks/useTodosStore';
import { CurrentThemeType } from '../../Stores/TodosStore';
import Tooltip from '@mui/material/Tooltip/Tooltip';

const ToggleThemeButtons: FC = () => {
    const todosStore = useTodosStore();
    const [alignment, setAlignment] = React.useState(todosStore.currentTheme);
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: CurrentThemeType,
    ) => {
        setAlignment(newAlignment);
        todosStore.toggleTheme(newAlignment);
    };

    return (
        <ToggleButtonGroup
            aria-label="Medium sizes"
            value={alignment}
            exclusive
            onChange={handleChange}
        >
            <Tooltip title="System theme">
                <ToggleButton className="DarkColor" value="SYSTEM">
                    <ContrastSharp />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Light theme">
                <ToggleButton className="DarkColor " value="LIGHT">
                    <WbSunnySharp />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Dark theme">
                <ToggleButton className="DarkColor" value="DARK">
                    <NightlightRoundSharp />
                </ToggleButton>
            </Tooltip>
        </ToggleButtonGroup>
    );
};

export default ToggleThemeButtons;
