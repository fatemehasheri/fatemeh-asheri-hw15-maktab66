import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:[],
      name:[]
    }
  }

  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddContact(this.state.name);
  }

  
  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} className="my-5">
        <Form.Group controlId="fullNameInput">
          <Form.Label className="bold">TODO</Form.Label>
          <Form.Control name="name" type="text" id={this.props.id} onChange={(e) => {this.handleChangeInput(e);}} />
          <Button className="c-button my-3" type="submit" >ADD</Button>
        </Form.Group>            
      </Form>
    );
  }
}

export default Todolist;