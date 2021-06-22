import React, { Component } from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
export class BestBooks extends Component {
  render() {
    console.log(this.props.data);
    let arr=this.props.data[0];
    if (!arr){
      arr=this.props.data;
    }
    return (
      
      <div>
        {arr.books.map((item,idx)=> {
          return (
            <Card className="text-center" key={idx}>
              <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                      {item.description}
                      </Card.Text>
                      <Button variant="primary"  onClick={()=>this.props.deleteMyBook(idx)}>Delete</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{item.state}</Card.Footer>
            </Card>
              
          );
        }
        )}
        </div>
      
    );
  }
}

export default BestBooks;
