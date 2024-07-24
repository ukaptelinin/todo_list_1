import { useSearchParams } from 'react-router-dom';
import { PAGE } from '../constants';

type UsePageNumberReturn = [
    pageNumber: number,
    setPageNumber: (currentPageNumber: number) => void,
];

const usePageNumber = (): UsePageNumberReturn => {
    const [searchParams, setSearchParams] = useSearchParams({ page: '' });

    const pageNumber: number = Number(searchParams.get(PAGE) ? searchParams.get(PAGE) : 1);
    const setPageNumber = (currentPageNumber: number): void => {
        setSearchParams((params) => {
            params.set(PAGE, String(currentPageNumber));
            return params;
        });
    };
    return [pageNumber, setPageNumber];
};

export default usePageNumber;
