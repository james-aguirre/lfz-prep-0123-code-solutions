var person = {
  firstName: 'James',
  lastName: 'Aguirre',
  hobby: 'Lifting'
};
console.log(person);
var fullName = 'The persons full name is ' + person.firstName + ' ' + person.lastName;
person.job = 'carpenter';
var personJob = 'The persons current job is ' + person.job;
console.log(fullName);
console.log(personJob);
person.previousJob = 'The persons previous job is friend';
console.log(person.previousJob);
console.log('The complete person object contains');
console.log(person);
