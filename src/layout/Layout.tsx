import React from 'react';
import { SnackbarKey, SnackbarProvider } from 'notistack';
import { ThemeCustomProvider } from '../theme/ThemeContext';
import Header from './Header';
import { IconButton } from '@mui/material';
import { Clear } from '@mui/icons-material';

const notistackRef = React.createRef<SnackbarProvider>();
const onClickDismiss = (key: SnackbarKey) => () => {
    notistackRef?.current?.closeSnackbar(key);
};
export default function Layout() {
    return (
        <SnackbarProvider
            maxSnack={3}
            ref={notistackRef}
            preventDuplicate
            action={(key) => (
                <IconButton size="small" color="inherit" onClick={onClickDismiss(key)}>
                    <Clear style={{ cursor: 'pointer' }} />
                </IconButton>
            )}
        >
            <ThemeCustomProvider>
                <Header />
            </ThemeCustomProvider>
        </SnackbarProvider>
    );
}
