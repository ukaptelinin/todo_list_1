import { useSearchParams } from 'react-router-dom';
import { ID, TITEL } from '../constants';

interface TodoUrlParams {
    id:number,
    titel:string,
}
type UseCurrentTodoUrl = [
    currentTodoUrl: TodoUrlParams,
    setCurrentTodoUrl: (todoUrl:TodoUrlParams) => void,
];

const useCurrentTodoUrl = (): UseCurrentTodoUrl => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentTodoUrl:TodoUrlParams = { id: Number(searchParams.get(ID)), titel: String(searchParams.get(TITEL)) };

    const setCurrentTodoUrl = (todoUrl:TodoUrlParams): void => {
        setSearchParams((params) => {
            params.set(ID, String(todoUrl.id));
            params.set(TITEL, todoUrl.titel);
            return params;
        });
    };
    return [currentTodoUrl, setCurrentTodoUrl];
};

export default useCurrentTodoUrl;
