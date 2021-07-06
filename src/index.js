const sayHello = () => {
    return 'Hello World!'
}

let fn = sayHello;

const greet = (fnMessage) => {
    console.log(fnMessage());
}

greet(fn);