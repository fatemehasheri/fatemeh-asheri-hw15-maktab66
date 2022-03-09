import React, { Component } from "react";
import { ListGroup, ListGroupItem ,Button ,Row,Col} from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

export default class ContactList extends Component {

  removeItemList=(todo)=>{
    this.setState({list:this.props.contacts.splice(todo,1)})
  }

  editItemList = (index) => {
    alert('Edit')
  }

  render() {
    const contactsItems = this.props.contacts.map((todo,index) => {
      return <ListGroupItem key={todo}>
      <Row>
        <Col>
          {todo}
        </Col>
        <Col>
          <Button className="c-button" onClick={() =>this.editItemList(todo)}><AiFillEdit /></Button>
        </Col>
        <Col>
          <Button className="c-button" onClick={() =>this.removeItemList(index)}><BsTrash /></Button>
        </Col>
      </Row>
      </ListGroupItem>;
    });

    return <ListGroup>{contactsItems}</ListGroup>;
  }
}