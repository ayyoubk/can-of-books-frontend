import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Header from "./Header";
// import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import MyFavoriteBooks from './MyFavoriteBooks';
import axios from 'axios';
import Profile from './components/Profile';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      serverUrl: process.env.REACT_APP_MY_SERVER,
      // userEmail: this.props.auth0.user.email,
      data: [],
    }
  }
  componentDidMount =async () => {
    await axios.get(`${this.state.serverUrl}/books?email=abdaullah20000@gmail.com`).then(response => {
      // console.log(response.data[0]);
        this.setState({
          data: response.data,
        })
        console.log(response.data);
    }).catch(
        error => {
            console.log(error.message, this.state.data);
        }
    );
} 
  
  render() {
    const { isAuthenticated } = this.props.auth0;
    // console.log("app", this.props);

    
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <MyFavoriteBooks data={this.state.data}/> : <Login />}
                
              </Route>
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
