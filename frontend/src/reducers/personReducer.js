const initialState = {
  persons: [],
  name: '',
  surname: '',
  address: '',
  city: '',
  createdDate: '',
  phone: ''
}

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        persons: state.persons.concat(action.payload)
      };
    case 'DELETE_PERSON':
    const myIndex = state.persons.findIndex(person => person._id === action.payload);
      return {
        ...state,
        persons: state.persons.slice(0, myIndex)
          .concat(state.persons.slice(myIndex + 1))
      };
    case 'FETCH_PERSONS':
      return {
        ...state,
        persons: state.persons.concat(action.payload)
      };
    case 'UPDATE_PERSON':
    const myUpdatedIndex = state.persons.findIndex(person => person._id === action.payload);
    console.log('###### index reducer', action.payload)
      return {
        persons: state.persons.slice(0, myUpdatedIndex).concat([state.persons[myUpdatedIndex +1]]).concat(state.persons.slice([myUpdatedIndex + 1]))
      }
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
    };
    case 'CHANGE_SURNAME':
      return {
        ...state,
        surname: action.payload
      }
    case 'CHANGE_ADDRESS':
      return {
        ...state,
        address: action.payload
      }
    case 'CHANGE_CITY':
      return {
        ...state,
        city: action.payload
      }
    case 'CHANGE_PHONE':
    return {
      ...state,
      phone: action.payload
    }
    case 'CHANGE_DATE':
    return {
      ...state,
      createdDate: action.payload
    }
    default:
    return state;
  }
};

export default personReducer;