//삭제시 확인하는 모달창

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import React from 'react';

function Confirmmodal({
    open,
    handleClose,
    confirmDelete,
}) {
    return (
        <>
            {/* 삭제시 확인하는 모달창 */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle align="center"> 강의 삭제</DialogTitle>
                <DialogContent style={{ width: '400px' }}>
                    <DialogContentText>삭제하시겠습니까?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmDelete}>예</Button>
                    <Button onClick={handleClose}>아니요</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Confirmmodal;