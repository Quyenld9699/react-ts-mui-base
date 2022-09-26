import { Box, Button, Paper, Typography } from '@mui/material';
import { imagePath } from 'src/constants/imagePath';
import useNotifier from '../hooks/useNotifier';
import { useThemeContext } from '../theme/ThemeContext';

export default function Header() {
    const { toggleThemeMode } = useThemeContext();
    const { notifySuccess } = useNotifier();
    return (
        <>
            <Button variant="contained" onClick={() => toggleThemeMode()}>
                Click
            </Button>
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Paper elevation={3} sx={{ padding: '1rem', backgroundColor: 'secondary.light' }}>
                    <Typography color="primary.dark" variant="h1">
                        Starter App
                    </Typography>
                </Paper>
                <Button
                    onClick={() => {
                        notifySuccess('Em chao anh quyen', { autoHideDuration: 5000, variant: 'info' });
                    }}
                >
                    Haloo
                </Button>
                <img src={imagePath.LOGO} width="500" alt="xx" />
            </Box>
        </>
    );
}
