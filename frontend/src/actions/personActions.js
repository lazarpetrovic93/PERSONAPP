export function fetchPersons() {
  return function (dispatch) {
    fetch(`http://localhost:4000/person`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            dispatch({
                type: 'FETCH_PERSONS',
                payload: data
            });
    })
  }
}
export function deletePerson(id) {
  return function (dispatch) {
      fetch(`http://localhost:4000/person/${id}`,
          {
              method: 'DELETE'
          })
          .then(function () {
              dispatch({
                  type: "DELETE_PERSON",
                  payload: id
              })
             
          })
  }
}
export function changeName(text) {
  return {
    type: 'CHANGE_NAME',
    payload: text
  }
}
export function changeSurName(text) {
  return {
    type: 'CHANGE_SURNAME',
    payload: text
  }
}
export function changeAddress(text) {
  return {
    type: 'CHANGE_ADDRESS',
    payload: text
  }
}
export function changeCity(text) {
  return {
    type: 'CHANGE_CITY',
    payload: text
  }
}
export function changePhone(text) {
  return {
    type: 'CHANGE_PHONE',
    payload: text
  }
}
export function changeDate(text) {
  return {
    type: 'CHANGE_DATE',
    payload: text
  }
}

export function addPerson(body) {

  return function (dispatch) {
      fetch(`http://localhost:4000/person`,
          {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
              },
              body: JSON.stringify(body)
          })
          .then(function (response) {
              return response.json()
          })
          .then(function ( data ) {
            console.log('data', data)
              dispatch({
                  type: "ADD_PERSON",
                  payload: data
              })
          })
  }
}

export function updatePerson({ id, body }) {
  return function (dispatch) {
    fetch(
      `http://localhost:4000/${id}`,
      {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body
      })
  }
}