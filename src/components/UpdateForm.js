import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'

export class UpdateForm extends Component {
  render() {
    return (
      <Modal show={this.props.flag} onHide={this.props.showFlag}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <form onSubmit={(e) => this.props.updateMyBook(e)}>
                  <label>Update Book Name :</label> <br></br>
                  <input
                    value={this.props.bookNameUpdate}
                    onChange={(e) => this.props.updateBookNameUpdateForm(e.target.value)}
                  ></input><br></br>

                  <label>Update Book Description :</label><br></br>
                  <input
                    value={this.props.bookDescriptionUpdate}
                    onChange={(e) => this.props.updateBookDescriptionUpdateForm(e.target.value)}
                  ></input><br></br>

                  <label>Update Book State :</label><br></br>
                  <input
                    value={this.props.bookStateUpdate}
                    onChange={(e) => this.props.updateBookStateUpdateForm(e.target.value)}
                  ></input><br></br>
                  <input type="submit" value="update Book" id='submitForm' />
                </form>

        </Modal.Body>
        
      </Modal>
    );
  }
}

export default UpdateForm;

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

      
//     </>
//   );
// }

// render(<Example />);