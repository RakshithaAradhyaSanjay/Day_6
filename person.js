class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

   displayProperties()
   {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
   }


}
const person1 = new Person('Francisca Rohan', 25, 'USA');
const person2 = new Person('Raimond Aruna', 30, 'Netherlands');

console.log(person1)  
console.log(person2)  
