## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)


```js

class person{
  constructor(name, age , gender){
    this.name = name;
    this.age = age ;
    this.gender = gender;
  };
  eat(){
    console.log(`${this.name} can eat!`)
  }
  sleep(){
    console.log(`${this.name} can sleep!`)
  }
  walk(){
    console.log(`${this.name} can walk!`)
  }
}

class player extends person{
  constructor(name,age,gender,sportsName){
    super(name,age,gender);
    this.sportsName = sportsName;
}
  play(){
     console.log(`${this.name} can play!`)
  }
}

class teacher extends person{
  constructor(name, age , gender,instituteName){
   this.institudeName = institudeName ;
  }
    teach(){
      console.log(`${this.name} can teach!`)
    }
}

class artist extends person{
  constructor(name,age,gender,kind){
    super(name,age,gender)
    this.kind = kind;
  }
   createart(){
     console.log(`${this.name} can create art of ${this.kind}`)
   }
}

class circketer extends player{
  constructor(name,age,gender,sportsName){
    this.teamName = teamName;
  }
  playCircket(){
    console.log(`${this.name} can play circket!`)
  }
}

```