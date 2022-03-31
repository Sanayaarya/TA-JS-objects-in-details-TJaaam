function  createanimal(location,numberOfLegs){
  let animal = Object.create(animalMethod)
   this.location= location;
   this.numbersofleges = numberOfLegs;
   return animal;
}

let animalsMethods = {
  changeLocation: function (newlocation ){
    this.location = newlocation
        alert(`I live in ${this.location} and I can eat`)
    },
    eat: function(){
      alert(`I live in ${location} and I can eat`)
    },
    summary: function(){
     return `I live in ${location} and I have ${numberOfLegs}`
    }
    
  };

  function dog(name,color){
    let dog = Object.create(dogMethod)
     dog.name= name;
     dog.color= color;
     return dog;
  }
  
  let dogMethods = {
    bark: function(){
      alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function(newName){
      this.name = newName;
      return name;
  },
  changeColor: function(newColor){
      this.color = newColor;
      return color;
  },
  summary: function(){
      return `I am ${this.name} and I am of ${this.color} color. I cam also bark`
  }

}

function cat(name,colorOfEye){
  let cat = Object.create(dogMethod)
   cat.name= name;
   cat.colorOfEye= colorOfEye;
   return cat;
}

let catMethods = {
  meow: function(){
    alert(`I am ${name} and I can do mewo meow 😹`);
},
changeName: function(newName){
    this.name = newName;
    return name;
},
changeColor: function(newColor){
    this.color = newColor;
    return color;
},
summary: function(){
    return `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

},

}

Object.setPrototypeOf(dogMethods,animalMethods);
Object.setPrototypeOf(catMethods,animalMethods);
