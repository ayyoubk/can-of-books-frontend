import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

export class BestBooks extends Component {
  render() {
    return (
      <Carousel>
        {this.props.data[0].books.map((item) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={item.url} alt="First slide" />
              <Carousel.Caption>
                <h3> {item.name}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default BestBooks;
