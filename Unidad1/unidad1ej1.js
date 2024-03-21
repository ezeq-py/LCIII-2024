let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];

//Opcion larga
let nameArray = input.map(element => {
    return element.name
})

//Opcion corta
input = input.map(el => el.name);

console.log(nameArray);
console.log(input);