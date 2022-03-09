import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Todolist from './Todolist';
import Todoform from './Todoform';

class Todo extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        list: ["alse", "false"],
        id:[]
      };
    }
    
    addId=() => {
      let myArray = [];
      let random = Math.floor(Math.random() * 16777215).toString(16);
      myArray.push(random);
      this.setState( state => ({
          id : [...state.id , myArray]
    }));
    }

    contactAddTodolist = (contact) => {
      this.setState({ list: [...this.state.list, contact] });
    };

    
    render() {
        return (
          <Container>
            <Row >
              <Col>
                <Todoform id={this.state.id} onAddContact={this.contactAddTodolist} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Todolist id={this.state.id} contacts={this.state.list} />
              </Col>
            </Row>
          </Container>
        );
      }
   
}


export default Todo;
