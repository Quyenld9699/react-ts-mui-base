import { Button, ButtonProps, IconButton, IconButtonProps } from '@mui/material';
import { MoonIcon, SunIcon } from 'src/assets/icons';
import { useThemeContext } from 'src/context/theme-context';

export default function ToggleThemeButton(props: ButtonProps) {
    const { mode, toggleThemeMode } = useThemeContext();

    return (
        <Button {...props} onClick={() => toggleThemeMode()}>
            {mode === 'dark' ? <SunIcon fontSize="large" /> : <MoonIcon fontSize="large" />}
        </Button>
    );
}
