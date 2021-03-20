import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import Container from '@material-ui/core/Container';

export default function UserProfile(props) {

    const [name, setName] = useState(localStorage.getItem("user"));
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
        } else {
            localStorage.setItem("user",name);
            localStorage.setItem("pass",password);
            props.update();
        }
    };

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper">
                    <Typography variant="h4">Registration</Typography>
                    <PersonIcon />
                    <form className="form" onSubmit={handleSave}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="fullName">User Name</InputLabel>
                            <Input
                                id="user"
                                name="user"
                                autoComplete="user"
                                value={name}
                                autoFocus
                                onChange={handleNameChange}
                            />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                autoComplete="password"
                                autoFocus
                                onChange={handlePasswordChange}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="rePassword">Confirm Password</InputLabel>
                            <Input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                autoComplete="confirmPassword"
                                onChange={handleConfirmPasswordChange}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >Save
                            </Button>
                        </FormControl>
                    </form>

                </div>
            </Container>
        </div>
    );
};