var events = require('events');
var EventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function(){
    console.log(' I hear a scream!');
}

//Assign the event handler to an event:
EventEmitter.on('scream',myEventHandler);

//Fire the 'scream' event
EventEmitter.emit('scream');