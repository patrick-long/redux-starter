// import { compose, pipe } from "lodash/fp";

// const sayHello = () => {
//     return 'Hello World!'
// }

// let input = '    Javascript    ';

// const trim = str => str.trim();
// const toLowerCase = str => str.toLowerCase();
// const wrap = type => str => `<${type}>${str}</${type}>`;

// const transform = pipe(trim, toLowerCase, wrap('div'));
// console.log(transform(input));

// const person = { 
//     name: 'John',
//     address: {
//         country: 'USA',
//         city: 'San Francisco'
//     }
// };
// const updatedPerson = { 
//     ...person, 
//     address: {
//         ...person.address,
//         city: 'New York'
//     },
//     name: 'Bob' 
// };
// updatedPerson.address.city = 'New York'

// const numbers = [1, 2, 3];

// Adding
// const index = numbers.indexOf(2);
// const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// Removing 
// const removed = numbers.filter(n => n !== 2);
// console.log(removed);

// Updating 
// const updated = numbers.map(n => n === 2 ? 20 : n );
// console.log(updated);

// console.log(added);



// import { Map } from 'immutable';
// import { produce } from 'immer';

// let book = Map({ title: 'Harry Potter' });

// const publishBook = book => {
//     return produce(book, draftBook => {
//         draftBook.isPublished = true;
//     })
// };

// let updated = publishBook(book);

// console.log(book);
// console.log(updated);

import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actionCreators';

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

unsubscribe();

store.dispatch(bugResolved(0));

console.log(store.getState());