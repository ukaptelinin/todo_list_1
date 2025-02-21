import React from 'react';
import ReactDOM from 'react-dom/client';
import RootComponent from './Components/RootComponent/RootComponent';
import { ChoiseThemeProvider } from './TodosThemeContextProvider/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChoiseThemeProvider>
            <RootComponent />
        </ChoiseThemeProvider>
    </React.StrictMode>,
);
