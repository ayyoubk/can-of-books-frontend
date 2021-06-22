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
        catNameUpdate: '',
        catIndex: 0
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
      alert('xxxxxxxxx')
  )

}
// 0000000000000000000000000

// 00000000000000000000000
//   deleteMyCat = (index) => {
//     // This function will be sending an axios request to the backend with the cat index to be deleted
//     // NOTE! when deleting items with axios, axios does not accept request body assignment

//     axios.delete(`${this.state.serverUrl}/cat/${index}?email=${this.state.userEmail}`).then(response => {
//         this.setState({
//             catsData: response.data.cats,
//             showUpdateForm: false
//         });
//     }).catch(error =>
//         alert(error.message)
//     )
// }




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
        this.props.data.length > 0 && <BestBooks data={this.state.bookData} />
      }
     </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
