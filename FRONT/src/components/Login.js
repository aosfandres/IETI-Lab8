import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Login.css';
import axios from "axios";

//inspirado de https://github.com/mui-org/material-ui/ 
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', pass: '' };
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('user', 'andres')
    localStorage.setItem('pass', 'sotelo')
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }

  handleUserChange = (e) => {
    this.setState({
      user: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      pass: e.target.value
    });
  }

/*   handleLoginChange = (e) => {
    e.preventDefault();
    if (this.state.user === localStorage.getItem('user') && this.state.pass === localStorage.getItem('pass')) {
      //alert("jelou");
      //this.props.settrue();
      this.props.changeView();
      localStorage.setItem('isLoggedIn', 'true');
      //alert(localStorage.getItem('isLoggedIn'));
    }
  } */
  handleLoginChange = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.user,
      password: this.state.pass
    }
    axios.post("http://localhost:8080/user/login", user)
      .then(Response => {
        let token = Response.data.accessToken;
        localStorage.setItem("token", token);
        localStorage.setItem('isLoggedIn', 'true');
        this.props.changeView();
      }).catch(error => {
        alert("fallo de autenticacion")
      });
  }


  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Typography component="h1" variant="h3">
            Task planner
        </Typography>
          <form className="form">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="andres"
              name="user"
              autoComplete="user"
              onChange={this.handleUserChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="sotelo"
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              onClick={this.handleLoginChange}
            >
              Login
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Register
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }

}

