class Animal {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    eat(){
        return '${this.name} is eating'
    }
    isSuperCute(){
        return this.age<=1;
    }
    iscute(){
        return true;
    }
}

// const animals = new Animal("tom",2)
// console.log(animals);
// console.log(animals.eat()) 
// console.log(animals.isSuperCutes()) 


//dog class
class Dog extends Animal {
   // java class if does not found constructor then it will seacrh cosntructor in  base class or parent class
   
   constructor(name,age,speed) {
      super(name,age);//it will call paremnt class constructor
      this.speed=speed;  
 
}
   spedd(){
       return `speed is ${this.speed}`
   }
}
//object ==instances
const dog= new Dog("rock",2,45)
console.log(dog.iscute())
console.log(dog.spedd())