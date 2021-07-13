import { compose, pipe } from "lodash/fp";

const sayHello = () => {
    return 'Hello World!'
}

let input = '    Javascript    ';

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrap = type => str => `<${type}>${str}</${type}>`;

const transform = pipe(trim, toLowerCase, wrap('div'));
console.log(transform(input));

const person = { 
    name: 'John',
    address: {
        country: 'USA',
        city: 'San Francisco'
    }
};
const updatedPerson = { 
    ...person, 
    address: {
        ...person.address,
        city: 'New York'
    },
    name: 'Bob' 
};
updatedPerson.address.city = 'New York'

const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// Removing 
const removed = numbers.filter(n => n !== 2);
console.log(removed);

// Updating 
const updated = numbers.map(n => n === 2 ? 20 : n );
console.log(updated);

console.log(added);