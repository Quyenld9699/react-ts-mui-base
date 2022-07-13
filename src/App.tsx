import Header from './layout/Header';
import { ThemeCustomProvider } from './context/theme-context';

function App() {
    return (
        <ThemeCustomProvider>
            <Header></Header>
        </ThemeCustomProvider>
    );
}

export default App;
