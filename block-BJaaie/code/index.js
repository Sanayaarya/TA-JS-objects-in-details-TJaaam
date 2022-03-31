function  Createanimal(location,numberOfLegs){
  // let animal = Object.create(animalMethod)
   this.location= location;
   this.numbersofleges = numberOfLegs;
  //  return animal;
}

Createanimal.prototype = {
  eat: function (){
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation){
    this.location = newLocation;
    return this.location;
  },
  summary: function(){
    console.log(`I live in $ {this.location} and I have ${this.numbersofleges }`)
  },
};

class Animal{
  constructor(location,numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat(){
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation){
    this.location = newLocation;
    return this.location;
  }
  summary(){
    console.log(`I live in $ {this.location} and I have ${this.numbersofleges }`)
  }
}
  function CreateDog( name, color ){
    CreateAnimal.apply(this,[location,numberOfLegs])
    this.name = name;
    this.color = color;
}

CreateDog.prototype ={
    bark:function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName:function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor:function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary:function(){
        returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

class Dog extends Animal {
  constructor(location, numberOfLegs , name ,color){
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark(){
    alert(`I am ${this.name} and I can bark 🐶`)
}
changeName(newName){
    this.name = newName;
    return this.name;
}
changeColor(newColor){
    this.color = newColor;
    return this.color;
}
summary(){
    returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
}
}

function CreateCat( name, colorOfEye ){
    CreateAnimal.apply(this)
    this.name = name;
    this.colorOfEye = colorOfEye;
}

CreateCat.prototype = {
    meow:function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName:function(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEye:function(newColor){
        this.colorOfEye = newColor;
        return this.colorOfEye;
    },
    summary:function(){
        returns `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    },
};

Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);
Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);


class Cat extends Animal {
  constructor(location, numberOfLegs , name ,color){
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = this.colorOfEyes;
  }
  meow(){
    alert(`I am ${this.name} and I can meow 🐶`)
}
changeName(newName){
    this.name = newName;
    return this.name;
}
changeColor(newColor){
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
}
summary(){
    returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

}
};