import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function MyModal(props) {

    const classes = useStyles();

    const [responsible, setResponsible] = useState("");
    const [status, setStatus] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleResponsibleChange = (e) => {
        setResponsible(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleDueDateChange = (e) => {
        setDueDate(e.target.value);
    };



    const handleSave = (e) => {
        e.preventDefault();
        const filters = {
            responsible: {"name": responsible,"email":"andres@gmail"} ,
            status: status,
            dueDate: dueDate
        };
        props.filters(filters);
        props.closeAction();
    };

    const handleClear = () => {
        setResponsible("");
        setStatus("");
        setDueDate("");
        const filters = {
            responsible: {"name": responsible,"email":"andres@gmail"} ,
            status: status,
            dueDate: dueDate
        };
        props.filters(filters);
        
        //props.closeAction();
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.closeAction}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }} 
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <Typography variant="h3" >Filter to tasks</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="responsible">Responsible</InputLabel>
                                <Input
                                    id="responsible"
                                    name="responsible"
                                    autoComplete="responsible"
                                    value={responsible}
                                    autoFocus
                                    onChange={handleResponsibleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="status">Status</InputLabel>
                                <Select
                                    labelId="status"
                                    id="status"
                                    value={status}
                                    onChange={handleStatusChange}
                                >
                                    <MenuItem value={"Ready"}>Ready</MenuItem>
                                    <MenuItem value={"In Progress"}>In Progress</MenuItem>
                                    <MenuItem value={"Done"}>Done</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="dueDate">dueDate</InputLabel>
                                <Input
                                    id="dueDate"
                                    name="dueDate"
                                    autoComplete="dueDate"
                                    value={dueDate}
                                    autoFocus
                                    onChange={handleDueDateChange}
                                />
                            </FormControl>
                        </form>
                        <Button
                            onClick={handleSave}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                        >Save</Button>
                        <br></br>
                        <br></br>
                        <Button
                            onClick={handleClear}
                            fullWidth
                            variant="contained"
                            color="primary"
                        >Clear</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}