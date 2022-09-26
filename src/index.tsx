import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterUrl from './routes';
import axios from 'axios';

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_API}`;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <RouterUrl />
    </BrowserRouter>
);
