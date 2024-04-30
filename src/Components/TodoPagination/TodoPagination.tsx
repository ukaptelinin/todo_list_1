import * as React from 'react';
import { useContext, FC } from 'react';
import Stack from '@mui/material/Stack/Stack';
import Pagination from '@mui/material/Pagination/Pagination';
import { TodosStateContext } from '../TodosStateContextProvider/context';
import usePageNumber from '../../Hooks/usePageNumber';

const TodoPagination: FC = () => {
    const { itemsList } = useContext(TodosStateContext);
    const [pageNumber, setPageNumber] = usePageNumber();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number):void => {
        setPageNumber(value);
    };
    const AMOUNT: number = 5;

    if (itemsList.length > 0) {
        return (
            <Stack spacing={2} alignItems="center">
                <Pagination
                    count={Math.ceil(itemsList.length / AMOUNT)}
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
