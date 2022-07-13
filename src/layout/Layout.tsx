import { ThemeCustomProvider } from '../theme/ThemeContext';
import Header from './Header';

export default function Layout() {
    return (
        <ThemeCustomProvider>
            <Header />
        </ThemeCustomProvider>
    );
}
