import { useSearchParams } from 'react-router-dom';

type UsePageNumberReturn = [
    getPageNumber: () => number,
    setPageNumber: (currentPageNumber:number) => void,
];

const usePageNumber = (): UsePageNumberReturn => {
    const [searchParams, setSearchParams] = useSearchParams({ page: '' });

    const getPageNumber = (): number => Number(searchParams.get('page'));
    const setPageNumber = (currentPageNumber:number): void => {
        setSearchParams((params) => {
            params.set('page', String(currentPageNumber));
            return params;
        });
    };
    return [getPageNumber, setPageNumber];
};

export default usePageNumber;
