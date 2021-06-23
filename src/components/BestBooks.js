import React, { Component } from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import CardColumns from "react-bootstrap/CardColumns";

export class BestBooks extends Component {
  render() {
    console.log(this.props.data, "11111111111111");
    let arr = this.props.data[0];
    if (!arr) {
      arr = this.props.data;
      console.log(arr, "0000000000");
    }
    return (
      <div>
        {arr.books.map((item, idx) => {
          return (
            <CardColumns>
              <Card bg="Secondary" key={idx}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Body>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Book Description <br></br>
                      <small className="text-muted">
                        Click for description
                      </small>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>{item.description}</Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </Card.Body>
                Book State : {item.state}
                <Card.Footer>
                  <Button
                    variant="danger"
                    onClick={() => this.props.deleteMyBook(idx)}
                    id="delete"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="dark"
                    onClick={() => this.props.showUpdateForm(item, idx)}
                    id="update"

                  >
                    Update !
                  </Button>
                </Card.Footer>
              </Card>
            </CardColumns>
          );
        })}
      </div>
    );
  }
}

export default BestBooks;
