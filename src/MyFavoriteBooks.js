import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Jumbotron from 'react-bootstrap/Jumbotron';
import "./myFavoriteBooks.css";
import BestBooks from "./components/BestBooks";
import CreateForm from './components/createForm';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        bookData:this.props.data,
        userName: this.props.auth0.user.name, 
        userEmail: this.props.auth0.user.email,
        serverUrl: process.env.REACT_APP_MY_SERVER,
        bookName: '',
        bookDescription: '',
        bookState: '',
        showUpdateForm: false,
       bookNameUpdate: '',
       bookIndex: 0
    }
}

updateBookName = (bookName) => this.setState({ bookName });
updateBookDescription = (bookDescription) => this.setState({ bookDescription });
updateBookState = (bookState) => this.setState({ bookState });

  createMyBook = (e) => {
    e.preventDefault()

    const reqBody = {
      userEmail: 'abdaullah20000@gmail.com',
      bookName: this.state.bookName,
      bookDescription:this.state.bookDescription,
      bookState:this.state.bookState
    }
    // to send a request for creating new data, we will be using the POST method
    axios.post(`${this.state.serverUrl}/book`, reqBody).then(response => {
        this.setState({
            bookData: response.data
        })
    }).catch(error =>
        alert(error.message)
    )

  }
  deleteMyBook = (index) => {

    axios.delete(`${this.state.serverUrl}/book/${index}?email=abdaullah20000@gmail.com`).then(response => {
      console.log(response.data);
        this.setState({
          bookData: response.data,
            showUpdateForm: false
        });
    }).catch(error =>
        alert(error.message)
    )
  }



  render() {
    return (
      <div>
      <CreateForm 
      updateBookname={this.updateBookName} 
      updateBookDescription={this.updateBookDescription} 
      updateBookState={this.updateBookState} 
      createMyBook={this.createMyBook}
      />
      {
        this.props.data.length > 0 && <BestBooks data={this.state.bookData} deleteMyBook={this.deleteMyBook} />
      }
     </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
