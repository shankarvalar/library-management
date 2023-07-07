
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Modal({ show, item }) {
    const [open, setOpen] = useState(false);
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" sx={{ width: "5rem", height: "2rem" }} onClick={handleClickOpen}>
                More
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <img style={{ width: "10rem", height: "10rem", }} src={thumbnail} alt="img" />
                    <DialogTitle><h1>{item.volumeInfo.title}</h1></DialogTitle>
                    <DialogContentText>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4>
                        <h4 >{item.volumeInfo.description}</h4>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}