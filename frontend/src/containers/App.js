import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import PersonList from '../components/PersonList';
import PersonForm from '../components/PersonForm';
import { addPerson, deletePerson, updatePerson, changeDate, changePhone, changeAddress, changeCity, fetchPersons, changeName, changeSurName } from '../actions/personActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchPersons();
  }

  handleSubmit(event) {
    // event.preventDefault(); 
    this.props.addPerson({
      name: this.props.persons.name,
      surname: this.props.persons.surname,
      address: this.props.persons.address,
      city: this.props.persons.city,
      phone: this.props.persons.phone,
      createdDate: this.props.persons.createdDate
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={{ marginTop: '20px' }}>
          <div className="col-md-12">
            <PersonList 
              personsProp={this.props.persons.persons}
              deletePerson={this.props.deletePerson}
              fetchPersons={this.props.fetchPersons}
              addPerson={this.props.addPerson}
              handleSubmit={this.handleSubmit}
              changeName={this.props.changeName}
              changeSurName={this.props.changeSurName}
              changeCity={this.props.changeCity}
              changeAddress={this.props.changeAddress}
              changeDate={this.props.changeDate}
              changePhone={this.props.changePhone}
              nameProp={this.props.persons.name}
              surnameProp={this.props.persons.surName}
              phoneProp={this.props.persons.phone}
              cityProp={this.props.persons.city}
              addressProp={this.props.persons.address}
              createdDateProp={this.props.persons.createdDate}
            />
          </div>
          <div className="col-md-4" style={{ marginTop: '20px', float: 'right' }}>
            <PersonForm 
              addPerson={this.props.addPerson}
              handleSubmit={this.handleSubmit}
              changeName={this.props.changeName}
              changeSurName={this.props.changeSurName}
              changeCity={this.props.changeCity}
              changeAddress={this.props.changeAddress}
              changeDate={this.props.changeDate}
              changePhone={this.props.changePhone}
              nameProp={this.props.persons.name}
              surnameProp={this.props.persons.surName}
              phoneProp={this.props.persons.phone}
              cityProp={this.props.persons.city}
              addressProp={this.props.persons.address}
              createdDateProp={this.props.persons.createdDate}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (body) => {
      console.log('#Trigerovano', body);
      dispatch(addPerson(body))
    },
    changeName: (text) => {
      dispatch(changeName(text))
    },
    changeSurName: (text) => {
      dispatch(changeSurName(text))
    },
    changeCity: (text) => {
      dispatch(changeCity(text))
    },
    changeAddress: (text) => {
      dispatch(changeAddress(text))
    },
    changeDate: (text) => {
      dispatch(changeDate(text))
    },
    changePhone: (text) => {
      dispatch(changePhone(text))
    },
    fetchPersons: () => {
      dispatch(fetchPersons())
    },
    deletePerson: (id) => {
      dispatch(deletePerson(id))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
