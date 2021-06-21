import React from "react";
import Header from "./Header";
// import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import MyFavoriteBooks from './MyFavoriteBooks';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      serverUrl: process.env.REACT_APP_MY_SERVER,
      // userEmail: this.props.auth0.user.email,
      data: [],
    }
  }
  componentDidMount = () => {
    axios.get(`${this.state.serverUrl}/books?email=abdaullah20000@gmail.com`).then(response => {
        this.setState({
          data: response.data,
        })
        // console.log(response.data);
    }).catch(
        error => {
            alert(error.message);
        }
    );
} 
  
  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log("app", this.props);

    
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated ? <MyFavoriteBooks data={this.state.data}/> : <Login />}
                
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route path="/profile">
                <Profile />
              </Route>

            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
