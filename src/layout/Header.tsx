import { Box, Button, Paper, Typography } from '@mui/material';
import { useThemeContext } from '../theme/ThemeContext';

export default function Header() {
    const { toggleThemeMode } = useThemeContext();
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
            </Box>
        </>
    );
}
