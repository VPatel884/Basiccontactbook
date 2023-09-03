const readlineSync = require('readline-sync');

const contact = [];

function mainMenu() {
  console.log('\nContact Book Menu: ');
  console.log('1. Add Contact');
  console.log('2. View Contact');
  console.log('3. Exit')
}

function addContact() {
  console.log('\nAdd A New Contact');
  const name = readlineSync.question('Enter Name: ');
  const mobileNo = readlineSync.question('Enter Mobile Number: ');
  const email = readlineSync.question('Enter Email: ');

  contact.push({name,mobileNo,email});
  console.log('Contact Added Successfully.')
}

function viewContact() {
  console.log('\nCantacts: ');
  if(contact.length === 0) {
    console.log('No Contacts to display.');
  } else {
    contact.forEach((contact) => {
      console.log('Name: ',contact.name);
      console.log('Mobile Number: ',contact.mobileNo);
      console.log('Email: ',contact.email);
      console.log('--------------')
    });
  }
}

function exit() {
  process.exit();
}

while (true) {
  mainMenu();
  const choose = readlineSync.question('Enter your choice: ')
  

  switch(choose) {
    case '1' :
      addContact();
      break;
    case '2' :
      viewContact()
      break;
    case '3' :
      console.log('Thank you!')
      exit()
      break;
      default :
      console.log('Invalid Entry.')
      console.log('Please choose a valid option.')
  }
}

