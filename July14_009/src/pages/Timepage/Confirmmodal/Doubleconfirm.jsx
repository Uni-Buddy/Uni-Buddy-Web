import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import React from 'react';


//삭제시 한 번 더 확인하는 모달창

function Doubleconfirm({ doubleopen, handleClose, confirmDelete }) {
    return (
        <Dialog open={doubleopen} onClose={handleClose}>
            <DialogTitle align="center"> 정말 삭제하시겠습니까?</DialogTitle>
            <DialogContent style={{ width: '300px' }}>

            </DialogContent>
            <DialogActions>
                <Button onClick={confirmDelete}>예</Button>
                <Button onClick={handleClose}>아니오</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Doubleconfirm;