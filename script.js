// Importera Animal class
const Animal = require('./animal')

// Skapa ett obejkt av Animal
const myAnimal = new Animal('Elvis', 15, 'Cat')

console.log(myAnimal.name)
console.log(myAnimal.toString())

// Birthday
myAnimal.aging()
myAnimal.toString()
