import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './Components/AppHeader/AppHeader';
import RootRoutes from './Components/RootRoutes/RootRoutes';

const App: FC = () => {
    return (
        <BrowserRouter>
            <AppHeader />
            <RootRoutes />
        </BrowserRouter>
    );
};

export default App;
