import * as React from 'react';
import { FC } from 'react';
import Stack from '@mui/material/Stack/Stack';
import Pagination from '@mui/material/Pagination/Pagination';
import todoListStore from '../../Stores/store';
import usePageNumber from '../../Hooks/usePageNumber';
import usePaginatioNcountPages from './usePaginatinoCountPages';

const TodoPagination: FC = () => {
    const [pageNumber, setPageNumber] = usePageNumber();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number):void => {
        setPageNumber(value);
    };
    const count: number = usePaginatioNcountPages();

    if (todoListStore.itemList.length > 0) {
        return (
            <Stack spacing={2} alignItems="center">
                <Pagination
                    count={count}
                    page={pageNumber}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                />
            </Stack>
        );
    }
    return null;
};
export default TodoPagination;
