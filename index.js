const readlineSync = require('readline-sync');

let contact = [];

function mainMenu() {
  console.log('\nContact Book Menu: ');
  console.log('1. Add Contact');
  console.log('2. View Contact');
  console.log('3. Exit')
}

function addContact() {
  console.log('\nAdd A New Contact');
  let name = readlineSync.question('Enter Name: ');
  let mobileNo = readlineSync.question('Enter Mobile Number: ');
  let email = readlineSync.question('Enter Email: ');

  contact.push({name,mobileNo,email});
  console.log('Contact Added Successfully.')
}

