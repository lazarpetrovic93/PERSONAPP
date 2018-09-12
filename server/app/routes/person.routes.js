module.exports = (app) => {
  const person = require('../controllers/person.controller.js');

  // Create a new Person
  app.post('/person', person.create);

  // Retrieve all Person
  app.get('/person', person.findAll);

  // Retrieve a single Person with noteId
  app.get('/person/:personId', person.findOne);

  // Update a person with personId
  app.put('/person/:personId', person.update);

  // Delete a Person with personId
  app.delete('/person/:personId', person.delete);
}