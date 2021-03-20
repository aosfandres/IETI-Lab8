import React from 'react';
import './App.css';
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: localStorage.getItem('isLoggedIn'), data: []};
   
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/api/tasks`)
      .then(res => {
        const tasks = res.data;
        let items = Object.keys(tasks).map(key => tasks[key]);
        this.setState({ data : items});
      })
  }
  
  changeStateFalse = () => {
    this.setState({ isLoggedIn: 'false' })
  }

  changeStateTrue = () => {
    this.setState({ isLoggedIn: 'true' })
  }

  render() {

    const changeView = () => {
      window.location.href = "/navigate";
      this.setState({ isLoggedIn: 'true' });
      
    }
    const changeViewProfile = () => {
      window.location.href = "/profile";
    }
    const changeViewNavigation = () => {
      window.location.href = "/navigate";
    }

    const logout = () => {
      window.location.href = "/";
      this.changeStateFalse();
      localStorage.setItem('isLoggedIn','false')
    }

    const LoginView = () => (
      <div>
        <Login changeView={changeView} />
      </div>
    );

    const normalView = () => (
      <Navigation logout={logout} items={this.state.data} new={newTask} profile={changeViewProfile} />
    );
    const profileView = () => (
      <UserProfile update={changeViewNavigation} />
    );


    const newTask = (task) => {
      axios.post("https://j7s4s80399.execute-api.us-east-1.amazonaws.com/task/IETI-Lab7",task)
      .then(response => {
        this.setState({data: this.state.data.concat(task)});
      });
      };

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={this.state.isLoggedIn === 'true' ? normalView : LoginView} />
          <Route path="/navigate" component={this.state.isLoggedIn  === 'true' ? normalView : LoginView}/>
          <Route path="/profile" component={this.state.isLoggedIn  === 'true' ? profileView : LoginView} />
        </Switch>
      </Router>
    );
  }
}

export default App;