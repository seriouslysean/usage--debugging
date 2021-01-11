let zero;
let one;
let two;
let three;

zero = () => {
    console.log('Running zero()');
    const a = 'foo';
    const b = 'bar';

    // This debugger fires after a and b are both declared
    // so they'll be visible in devtools while debugging
    debugger;

    console.log('Throwing error');
    throw new Error('Error in zero()');
};

one = () => {
    console.log('Running one()');
    debugger;

    // Using call() with a blank object mocks the this context
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    console.log('Calling zero()');
    zero.call({});
};

two = () => {
    console.log('Running two()');
    debugger;

    console.log('Calling one()');
    one();
};

three = () => {
    console.log('Running three()');
    debugger;

    console.log('Calling two()');
    two();
};

function load(event) {
    console.info('App loaded', event);
    debugger;

    // Will fire in this order:
    //   three() -> two() -> one() -> zero()
    three();
}

window.addEventListener('load', load);
