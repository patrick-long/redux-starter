import { compose, pipe } from "lodash/fp";

const sayHello = () => {
    return 'Hello World!'
}

let input = '    Javascript    ';

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrap = (type, str) => `<${type}>${str}</${type}>`;

const transform = pipe(trim, toLowerCase, wrapInDiv);
transform(input);

