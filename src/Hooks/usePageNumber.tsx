import { useSearchParams } from 'react-router-dom';

type UsePageNumberReturn = [
    pageNumber: number,
    setPageNumber: (currentPageNumber:number) => void,
];

const usePageNumber = (): UsePageNumberReturn => {
    const [searchParams, setSearchParams] = useSearchParams({ page: '' });

    const pageNumber:number = Number(searchParams.get('page'));
    const setPageNumber = (currentPageNumber:number): void => {
        setSearchParams((params) => {
            params.set('page', String(currentPageNumber));
            return params;
        });
    };
    return [pageNumber, setPageNumber];
};

export default usePageNumber;
