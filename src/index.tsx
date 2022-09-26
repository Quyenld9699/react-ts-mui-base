import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterUrl from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <RouterUrl />
    </BrowserRouter>
);
