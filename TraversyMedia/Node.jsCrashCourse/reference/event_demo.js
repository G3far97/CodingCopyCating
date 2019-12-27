const eventEmitter = require('events');

// Create class
class MyEmitter extends eventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

/// Output ///
/*
    Event Fired!
    Event Fired!
    Event Fired!
    Event Fired!
*/