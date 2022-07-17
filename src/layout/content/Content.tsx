import { Box, Button } from '@mui/material';
import { layoutConfig } from '../layout.config';
import Summary from './Summary/Summary';

type Props = {};

export default function Content({}: Props) {
    return (
        <Box sx={{ maxWidth: '1200px', margin: '0 auto', mt: layoutConfig.headerHeight, p: 2 }}>
            <Summary />
        </Box>
    );
}
