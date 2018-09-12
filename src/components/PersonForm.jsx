import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap';

class PersonForm extends Component {

  render() {
    return (
      <div>
        <form >
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            placeholder="Enter name"
            onChange={ (e) => this.props.changeName(e.target.value)}
          />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            placeholder="Enter surname"
            onChange={(e) => this.props.changeSurName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>   
          <FormControl
            type="text"
            placeholder="Enter city"
            onChange={(e) => this.props.changeCity(e.target.value)}
          />
        </FormGroup>
        <FormGroup>   
          <FormControl
            type="text"
            placeholder="Enter address"
            onChange={ (e) => this.props.changeAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Enter phone"
            onChange={ (e) => this.props.changePhone(e.target.value)}
          />
        </FormGroup >
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Enter date"
            onChange={ (e) => this.props.changeDate(e.target.value)}
          />
        </FormGroup >
      </form >
      <Button bsStyle="primary" onClick={() => this.props.handleSubmit()}>Submit</Button>
      </div>
      

    )
  }
}
export default PersonForm;