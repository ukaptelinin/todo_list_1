import { useSearchParams } from 'react-router-dom';
import { PAGE } from '../Stores/store';

type UsePageNumberReturn = [
    pageNumber: number,
    setPageNumber: (currentPageNumber:number) => void,
];

const usePageNumber = (): UsePageNumberReturn => {
    const [searchParams, setSearchParams] = useSearchParams({ page: '' });

    const pageNumber:number = Number(searchParams.get(PAGE));
    const setPageNumber = (currentPageNumber:number): void => {
        setSearchParams((params) => {
            params.set(PAGE, String(currentPageNumber));
            return params;
        });
    };
    return [pageNumber, setPageNumber];
};

export default usePageNumber;
