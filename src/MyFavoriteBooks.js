import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Jumbotron from 'react-bootstrap/Jumbotron';
import "./myFavoriteBooks.css";
import BestBooks from "./components/BestBooks";
import CreateForm from "./components/createForm";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import UpdateForm from "./components/UpdateForm";
import Accordion from "react-bootstrap/Accordion";
// import Button from 'react-bootstrap/Button';
class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: this.props.data,
      userName: this.props.auth0.user.name,
      userEmail: this.props.auth0.user.email,
      serverUrl: process.env.REACT_APP_MY_SERVER,
      bookName: "",
      bookDescription: "",
      bookState: "",
      showUpdateForm: false,
      bookNameUpdate: "",
      bookDescriptionUpdate: "",
      bookStateUpdate: "",
      bookIndex: 0,
    };
  }

  updateBookName = (bookName) => this.setState({ bookName });
  updateBookDescription = (bookDescription) =>
    this.setState({ bookDescription });
  updateBookState = (bookState) => this.setState({ bookState });

  updateBookNameUpdateForm = (bookName) =>this.setState({bookNameUpdate: bookName});
  updateBookDescriptionUpdateForm = (bookDescription) =>this.setState({bookDescriptionUpdate: bookDescription});
  updateBookStateUpdateForm = (bookState) =>this.setState({bookStateUpdate: bookState});
  showFlag=() =>{ this.setState({showUpdateForm : !this.state.showUpdateForm}) }

  showUpdateForm = (bookObject, idx) =>
    this.setState({
      showUpdateForm: !this.state.showUpdateForm,
      bookNameUpdate: bookObject.name,
      bookDescriptionUpdate: bookObject.description,
      bookStateUpdate: bookObject.state,
      bookIndex: idx,
  });

  createMyBook = (e) => {
    e.preventDefault();

    const reqBody = {
      userEmail: "abdaullah20000@gmail.com",
      bookName: this.state.bookName,
      bookDescription: this.state.bookDescription,
      bookState: this.state.bookState,
    };
    // to send a request for creating new data, we will be using the POST method
    axios
      .post(`${this.state.serverUrl}/book`, reqBody)
      .then((response) => {
        this.setState({
          bookData: response.data,
        });
      })
      .catch((error) => alert(error.message));
  };
  deleteMyBook = (index) => {
    axios
      .delete(
        `${this.state.serverUrl}/book/${index}?email=abdaullah20000@gmail.com`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          bookData: response.data,
          showUpdateForm: false,
        });
      })
      .catch((error) => alert(error.message));
  };

  updateMyBook =async (e) => {
    e.preventDefault();
    this.showFlag();
    const reqBody = {
      userEmail: "abdaullah20000@gmail.com",
      bookName: this.state.bookNameUpdate,
      bookDescription: this.state.bookStateUpdate,
      bookState: this.state.bookDescriptionUpdate,
    };

    // to send a request for creating new data, we will be using the POST method
    await axios
      .put(`${this.state.serverUrl}/book/${this.state.bookIndex}`, reqBody)
      .then((response) => {
        this.setState({
          bookData: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => console.log(error.message, this.state.bookData));
  };

  render() {
    return (
      <div id='cards'>

      <Accordion defaultActiveKey="0">
            <Accordion.Toggle eventKey="1">
              Add New Book <br></br>
              <small className="text-muted">Click to add !!</small>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
                      <CreateForm
                    updateBookname={this.updateBookName}
                    updateBookDescription={this.updateBookDescription}
                    updateBookState={this.updateBookState}
                    createMyBook={this.createMyBook}
                  />
            </Accordion.Collapse>
          </Accordion>
        
        {this.props.data.length > 0 && (
          <BestBooks
            data={this.state.bookData}
            deleteMyBook={this.deleteMyBook}
            showUpdateForm={this.showUpdateForm}
          />
        )}
        {this.state.showUpdateForm && (
          <div>
            <UpdateForm
              updateMyBook={this.updateMyBook}
              updateBookNameUpdateForm={this.updateBookNameUpdateForm}
              updateBookDescriptionUpdateForm={this.updateBookDescriptionUpdateForm}
              updateBookStateUpdateForm={this.updateBookStateUpdateForm}
              bookNameUpdate={this.state.bookNameUpdate}
              bookDescriptionUpdate={this.state.bookDescriptionUpdate}
              bookStateUpdate={this.state.bookStateUpdate}
              showFlag={this.showFlag}
              flag={this.state.showUpdateForm}

            />
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
