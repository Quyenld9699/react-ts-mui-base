import Header from './layout/Header';
import { ThemeCustomProvider } from './theme/ThemeContext';

function App() {
    return (
        <ThemeCustomProvider>
            <Header></Header>
        </ThemeCustomProvider>
    );
}

export default App;
