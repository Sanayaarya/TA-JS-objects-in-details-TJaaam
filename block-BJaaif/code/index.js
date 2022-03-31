/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  // add code here
  let vicky = {};
  vicky.name = name;
  vicky.age = age;
}

var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

let personStore = {
  greet(){
    console.log("Hello");
  }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  // add code here
  let sandra = {};
  sandra.name = name;
  sandra.age = age;
  sandra.greet = function(){
    console.log("hello");
  }
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// add code here

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  // add code here
  greet=function(){
    console.log("hello");
  }
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  // add code here
  let mike = {};
  mike.name = name;
  mike.age = age;
}

var mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// add code here

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor() {
    // add code here   
  }
  // add code here
  greet(){
    console.log("hello")
  }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// add code here
class DeveloperClass extends PersonClass{
    constructor( name){
      this.name = name;
    }
    introduce(){
      console.log(`Hello World, my name is ${this.name}`);
    }
}

// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

// var adminFunctionStore = {
//     sayType: function(){
//       console.log("I am Admin")
//     },
//     sharePublicMessage: function(){
//       console.log("Welcome users!")
//     }
// } /* Put code here */ 

var adminFunctionStore = object.create(userFunctionStore);


function adminFactory(name, score) {
  // Put code here
   let obj = userFactory(name,score);
   object.setPrototypeOf(obj,adminFunctionStore)
   obj.type = "Admin";
   return obj;
}


/* Put code here for a method called sharePublicMessage*/

adminFunctionStore.sharePublicMessage = function (){
  console.log(`Welcome user`);
}

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
