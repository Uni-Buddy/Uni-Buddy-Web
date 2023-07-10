import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import React from 'react';
import Doubleconfirm from './Doubleconfirm';

//삭제시 확인하는 모달창

function Confirmmodal({
    open,
    handleClose,
    handleDelete,
    doubleopen,
    confirmDelete,
}) {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle align="center"> 강의 삭제</DialogTitle>
                <DialogContent style={{ width: '400px' }}>
                    <DialogContentText>삭제하시겠습니까?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>예</Button>
                    <Button onClick={handleDelete}>아니오</Button>
                </DialogActions>
                <Doubleconfirm
                    doubleopen={doubleopen}
                    handleClose={handleClose}
                    confirmDelete={confirmDelete}
                />
            </Dialog>
        </>
    );
}

export default Confirmmodal;
