import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import './Login.css';

//inspirado de https://material-ui.com/es/components/dialogs/
export default function NewTask(props) {
    const [open, setOpen] = React.useState(false);
    const [description, setDescription] = useState("");
    const [responsible, setResponsible] = useState("");
    const [status, setStatus] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleResponsibleChange = (e) => {
        setResponsible(e.target.value);
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }

    const handleDueDateChange = (e) => {
        setDueDate(e.target.value);
    }

    const handleNewTask = (e) => {
        e.preventDefault();
        if(description === "" || responsible === "" || status === null ||  dueDate === ""){
            alert("Se deben completar todos los campos");
        } else {
            const newTask = {
                "description": description,
                "responsible": {
                    "name": responsible,
                    "email": responsible+"@gmail.com"
                },
                "status": status,
                "dueDate": dueDate
            };
            props.new(newTask);
            setOpen(false);
        }
    }

    return (
        <div>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" disableTypography>
                    <Typography variant="h3" style={{ textAlign: "center" }}>New Task</Typography>
                </DialogTitle>
                <DialogContent>
                    <form className="form">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="descripcion"
                            label="descripcion"
                            name="descripcion"
                            autoComplete="descripcion"
                            onChange={handleDescriptionChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="responsable"
                            label="responsable"
                            type="responsable"
                            id="responsable"
                            onChange={handleResponsibleChange}
                        />
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="status">Status</InputLabel>
                            <Select
                                labelId="status"
                                id="status"
                                onChange={handleStatusChange}
                            >
                                <MenuItem value={"Ready"}>Ready</MenuItem>
                                <MenuItem value={"In Progress"}>In Progress</MenuItem>
                                <MenuItem value={"Done"}>Done</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="dueDate"
                            label="dueDate"
                            type="dueDate"
                            id="dueDate"
                            onChange={handleDueDateChange}
                        />
                        <FormControl margin="normal" required fullWidth>
                            <div style={{ textAlign: "center" }}>
                                <Fab style={{ backgroundColor: "red" }} aria-label="Add" onClick={handleClose}>
                                    <CloseRoundedIcon />
                                </Fab>
                                <Fab style={{ backgroundColor: "green" }} onClick={handleNewTask} >
                                    <CheckRoundedIcon />
                                </Fab>
                            </div>
                        </FormControl>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );


}

