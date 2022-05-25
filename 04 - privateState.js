// An example of a private state in JS
// This way we can create encapsulation which is one of the core principles of OOP


function privateState() {
    const privateVariable = 'TOP SECRET';
    
    return function accessPrivateState() {
        return privateVariable;
    };
};

const x = privateState();

console.log(x());