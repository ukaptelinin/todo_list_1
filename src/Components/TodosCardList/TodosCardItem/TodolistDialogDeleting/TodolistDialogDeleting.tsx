import Dialog from '@mui/material/Dialog/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import Button from '@mui/material/Button/Button';
import { FC } from 'react';

<<<<<<< HEAD
const ConfirmDialog: FC < { open: boolean, confirm: () => void, cancel: () => void, title: string, } > = ({
=======
const ConfirmDialog: FC< { open: boolean, confirm:() => void, cancel: () => void, title: string, } > = ({
>>>>>>> 060b980d021bdf52d90c17cdf906b7472487949b
    open, confirm, cancel, title,
}) => (
    <Dialog
        open={open}
        onClose={cancel}
    >
        <DialogContent>
            <DialogContentText variant="h6" color="red">
                {title}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button color="error" onClick={confirm}>Да</Button>
            <Button onClick={cancel}>Нет</Button>
        </DialogActions>
    </Dialog>
);

export default ConfirmDialog;
