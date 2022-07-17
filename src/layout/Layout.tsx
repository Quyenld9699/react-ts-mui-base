import { CacheProvider } from 'src/context/cache-context';
import { KeplrProvider } from 'src/context/keplr-context/keplr-context';
import { ThemeCustomProvider } from '../context/theme-context';
import Content from './content/Content';
import Header from './header/Header';

export default function Layout() {
    return (
        <CacheProvider>
            <ThemeCustomProvider>
                <KeplrProvider>
                    <Header />
                    <Content />
                </KeplrProvider>
            </ThemeCustomProvider>
        </CacheProvider>
    );
}
