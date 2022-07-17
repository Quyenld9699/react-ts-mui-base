import { createContext, useContext, useEffect, useState } from 'react';
import { FetchingStatus } from '../../constant/FetchingStatus';
import { BaseContextProps } from '../../global.config';

interface KeplrContextData {
    status: FetchingStatus;
    isConnecting: boolean;
    address: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?: any;
    // fetch: () => Promise<void>;
    connectKeplrWallet: () => Promise<void>;
}

const KeplrContext = createContext({} as KeplrContextData);

export function KeplrProvider({ children }: BaseContextProps) {
    const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.IDLE);
    const [error, setError] = useState<Error | undefined>();
    const [address, setAddress] = useState('');
    const [isConnecting, setConnecting] = useState(false);

    async function connectKeplrWallet() {
        setConnecting(true);
        if (!(await window.keplr)) {
            alert('You must install Keplr to continue');
            setConnecting(false);
            return;
        }

        const chainId = 'Oraichain-testnet';
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        console.log('Hello');
        try {
            const accounts = await offlineSigner.getAccounts();
            console.log(accounts);
            setAddress(accounts[0].address);
        } catch (err) {
            console.log(err);
            setError(err as Error);
        }

        console.log('Success: Update Information');
        setConnecting(false);
    }
    return (
        <KeplrContext.Provider
            value={{
                status,
                error,
                isConnecting,
                address,
                connectKeplrWallet,
            }}
        >
            {children}
        </KeplrContext.Provider>
    );
}

export const useKeplrContext = () => useContext(KeplrContext);
