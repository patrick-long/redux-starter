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
const updatedPerson = { ...person, name: 'Bob' };
updatedPerson.address.city = 'New York'
console.log(updatedPerson, person);