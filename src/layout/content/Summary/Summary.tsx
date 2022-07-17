import { Box, Grid } from '@mui/material';
import React from 'react';
import CardData from './CardData/CardData';

type Props = {};

export default function Summary({}: Props) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={6} md={4}>
                    <CardData title={'Total Deposit'} value={21117} color="primary.main" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <CardData title={'Total Borrow'} value={21117} color="error.main" />
                </Grid>
            </Grid>
        </Box>
    );
}
