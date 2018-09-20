import React, { Component } from 'react';
import { Table, Button, Modal, FormGroup, FormControl, HelpBlock, } from 'react-bootstrap';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      editedName: null,
      editedId: null,
      editedPhone: null,
      editedAddress: null,
      editedSurName: null,
      editedDate: null,
      editedCity: null,
    };

    this.listPersons = '';
    this.clickDeleteFunc = this.clickDeleteFunc.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.editUser = this.editUser.bind(this)
    this.saveChanges =  this.saveChanges.bind(this)
  }

  handleClose() {
    this.setState({ show: false });
  }
  saveChanges() {
    this.handleClose();
    // console.log('$$$ edited id', this.state.editedId)
    this.props.updatePerson(this.state.editedId,
      {
        name: this.state.editedName,
        surname: this.state.editedSurName,
        address: this.state.editedAddress,
        city: this.state.editedCity,
        phone: this.state.editedPhone,
        createdDate: this.state.editedDate
      }
    );
  // console.log('this props personssssss', this.props.personsProp)
  }
  editUser(id) {
    this.setState({ show: true });
    const editedUser = this.props.personsProp.filter(p => {
      if (p._id === id) {
        return p
      }
    })
    this.setState({
      editedName: editedUser[0].name,
      editedAddress: editedUser[0].address,
      editedId: editedUser[0]._id,
      editedPhone: editedUser[0].phone,
      editedSurName: editedUser[0].surname,
      editedDate: editedUser[0].createdDate,
      editedCity: editedUser[0].city
      }); 
    // console.log('editedUser', editedUser);
  }


  componentWillReceiveProps(nextProps) {
    if(this.props.personsProp !== nextProps.personsProp) {
      // console.log('person prop: ', nextProps.personsProp)
      
      this.listPersons = nextProps.personsProp.map(person => {
        if (person){
          return (
            <tr key={person._id}>
              <td>{person.name}</td>
              <td>{person.surname}</td>
              <td>{person.phone}</td>
              <td>{person.city}</td>
              <td>{person.address}</td>
              <td>{person.createdDate}</td>
              <td>
                <Button bsStyle="danger" onClick={() => this.clickDeleteFunc(person) }>Delete</Button>
                <Button bsStyle="warning" onClick={() => this.editUser(person._id)}>Edit</Button>
              </td>
            </tr>
          )
        }
      })

    }
  }

  clickDeleteFunc(person) {
    this.props.deletePerson(person._id);
  }
 
  render() {
    console.log('state edited id:', this.state.editedId)
    return (
      <div>
        <div className="list-style">
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>SurName</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>  </th>
                </tr>
              </thead>
              <tbody>
              {this.listPersons}
              </tbody>
            </Table>
        </div>
        <div className="static-modal">
        <Modal show={this.state.show} onHide={this.handleClose}>
  <Modal.Header>
    <Modal.Title>Edit Person</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <form>
      <FormGroup
        controlId="formBasicText"
      >
        <FormControl
          type="text"
          value={this.state.editedName}
          placeholder="Enter name"
          onChange={(e) => this.setState({editedName: e.target.value})}
        />
      </FormGroup>
      <FormGroup
        controlId="formBasicText"
      >
        <FormControl
          type="text"
          value={this.state.editedSurName}
          placeholder="Enter surname"
          onChange={(e) => this.setState({editedSurName: e.target.value})}
        />
      </FormGroup>
      <FormGroup>   
        <FormControl
          type="text"
          value={this.state.editedCity}
          placeholder="Enter city"
          onChange={(e) => this.setState({editedCity: e.target.value})}
        />
      </FormGroup>
      <FormGroup>   
        <FormControl
          type="text"
          value={this.state.editedAddress}
          placeholder="Enter address"
          onChange={(e) => this.setState({editedAddress: e.target.value})}
        />
      </FormGroup>
      <FormGroup>
        <FormControl
          type="text"
          value={this.state.editedPhone}
          placeholder="Enter phone"
          onChange={(e) => this.setState({editedPhone: e.target.value})}
        />
      </FormGroup >
      <FormGroup>
        <FormControl
          type="text"
          value={this.state.editedDate}
          placeholder="Enter date"
          onChange={(e) => this.setState({editedDate: e.target.value})}
        />
      </FormGroup >
    </form >
  </Modal.Body>

  <Modal.Footer>
    <Button onClick={() => this.handleClose()}>Close</Button>
    <Button onClick={() => this.saveChanges()} bsStyle="primary">Save changes</Button>
  </Modal.Footer>
</Modal>
        </div>
      </div>
    )
  }
}
export default List;