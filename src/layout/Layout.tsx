import { ThemeCustomProvider } from '../context/theme-context';
import Header from './Header';

export default function Layout() {
    return (
        <ThemeCustomProvider>
            <Header />
        </ThemeCustomProvider>
    );
}
