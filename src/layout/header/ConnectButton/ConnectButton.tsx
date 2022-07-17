import { Button, ButtonProps } from '@mui/material';
import { useKeplrContext } from 'src/context/keplr-context/keplr-context';
import { WalletIcon } from '../../../assets/icons';
import { formatAddress } from '../../../utils/format';

export default function ConnectButton(props: ButtonProps) {
    const { address, isConnecting, connectKeplrWallet } = useKeplrContext();

    return (
        <>
            {isConnecting ? (
                <Button variant="contained" color="secondary" startIcon={<WalletIcon />}>
                    Connecting...
                </Button>
            ) : (
                <>
                    {address ? (
                        <Button variant="gradient" {...props} onClick={() => connectKeplrWallet()} startIcon={<WalletIcon />}>
                            {formatAddress(address)}
                        </Button>
                    ) : (
                        <Button variant="gradient" {...props} onClick={() => connectKeplrWallet()} startIcon={<WalletIcon />}>
                            Connect wallet
                        </Button>
                    )}
                </>
            )}
        </>
    );
}
