import { Secp256k1Wallet } from '@cosmjs/amino';
import { Box } from '@mui/material';
import { imagePath } from '../../constant/ImagePath';
import { useThemeContext } from '../../context/theme-context';
import { layoutConfig } from '../layout.config';
import ConnectButton from './ConnectButton/ConnectButton';
import ToggleThemeButton from './ToggleThemeButton/ToggleThemeButton';

export default function Header() {
    const { toggleThemeMode } = useThemeContext();

    // const test = async () => {
    //     const kepler = await Secp256k1Wallet.fromKey(new Uint8Array(66));
    //     const address = await kepler.getAccounts();
    //     console.log(address);
    // };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: layoutConfig.headerHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pr: 2,
                pl: 2,
                bgcolor: 'background.paper',
            }}
        >
            <img src={imagePath.logo} style={{ height: '65px', width: '200px', objectFit: 'cover', borderRadius: 13 }} />
            <ConnectButton />
            <ToggleThemeButton />
        </Box>
    );
}
