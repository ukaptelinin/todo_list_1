import React from 'react';
import ReactDOM from 'react-dom/client';
import RootComponent from './Components/RootComponent/RootComponent';
import TodoThemeContextProvider from './TodosThemeContextProvider/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TodoThemeContextProvider>
            <RootComponent />
        </TodoThemeContextProvider>
    </React.StrictMode>,
);
