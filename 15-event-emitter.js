const EventEmitter = require('events'); //returns class, given name is common practice

const customEmitter = new EventEmitter(); //create new instance of EventEmitter class

//method
//On - listen for an event
//Emit - Emit an event
//on before emit
//can add parameters on emit

customEmitter.on('response', (name, id) => { //event and callback function
    console.log(`Data received ${name} with id ${id}`);
});

customEmitter.on('response', () => { //second event and callback function
    console.log(`some other logic`);
});

customEmitter.emit('response', 'john', 34);