import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './Components/AppHeader/AppHeader';
import RootRoutes from './Components/RootRoutes/RootRoutes';
import TodosStateContext, {
    todosStore,
} from './Components/TodosStateContext/TodosStateContext';

const App: FC = () => {
    return (
        <BrowserRouter>
            <TodosStateContext.Provider value={todosStore}>
                <AppHeader />
                <RootRoutes />
            </TodosStateContext.Provider>
        </BrowserRouter>
    );
};

export default App;
