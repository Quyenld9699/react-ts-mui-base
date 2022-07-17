import { Box, Typography } from '@mui/material';

type Props = {
    title: string;
    value: number;
    color: 'primary.main' | 'warning.main' | 'secondary.main' | 'error.main';
};

export default function CardData(props: Props) {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: '8px', m: 1 }}>
            <Typography
                variant="subtitle2"
                sx={{
                    ':before': { content: '""', display: 'inline-block', width: '20px', height: '20px', bgcolor: props.color, borderRadius: '50%', mr: 1 },
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {props.title}
            </Typography>
            <Typography variant="h3" sx={{ pt: 2, textAlign: 'center' }}>
                ${props.value}
            </Typography>
        </Box>
    );
}
