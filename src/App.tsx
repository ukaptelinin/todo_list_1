import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './Components/AppHeader/AppHeader';
import TodosStateContext, { todosStore } from './Components/TodosStateContext/TodosStateContext';
import RootRoutes from './Components/RootRoutes/RootRoutes';
import { DndProvider } from 'react-dnd/dist/core/DndProvider';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App: FC = () => (
    <TodosStateContext.Provider value={todosStore}>
        <BrowserRouter>
           
                <AppHeader />
                <RootRoutes />
           
        </BrowserRouter>
    </TodosStateContext.Provider>
);

export default App;
