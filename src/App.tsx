import type { FC } from 'react';
import {
    BrowserRouter,
} from 'react-router-dom';

import AppHeader from './Components/AppHeader/AppHeader';
import TodosStateContext, { todosStore } from './Components/TodosStateContext/TodosStateContext';
import Case from './Components/Case/Case';

const App: FC = () => (

    <TodosStateContext.Provider value={todosStore}>
        <BrowserRouter>
            <AppHeader />
            <Case />
        </BrowserRouter>
    </TodosStateContext.Provider>
);

export default App;
