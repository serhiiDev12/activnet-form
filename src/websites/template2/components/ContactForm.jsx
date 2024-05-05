import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextareaAutosize,
    TextField
} from "@mui/material";

export default function ContactForm(props) {

    const handleClose = () => {
        props.setOpenClose(false)
    };
    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
        >
            <DialogTitle>Make an inquiry</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please provide more info of how we can help you?
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="name"
                    label="Full Name"
                    type="name"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    multiline
                    rows={4}
                    autoFocus
                    required
                    margin="dense"
                    id="comment"
                    name="help"
                    label="How we can help"
                    type="help"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button sx={{color: }} onClick={handleClose}>Close</Button>
                <Button type="submit">Make inquiry</Button>
            </DialogActions>
        </Dialog>
    )
}