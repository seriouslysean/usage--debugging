const urlParams = new URLSearchParams(window.location.search);
const shouldDebug = urlParams.get('debug') !== null;

let zero;
let one;
let two;
let three;

const debugIt = () => {
    if (shouldDebug) {
        debugger;
    }
};

zero = () => {
    console.log('Running zero()');
    const a = 'foo';
    const b = 'bar';

    // This debugger fires after a and b are both declared
    // so they'll be visible in devtools while debugging
    debugIt();

    console.log('Throwing error');
    throw new Error('Error in zero()');
};

one = () => {
    console.log('Running one()');
    debugIt();

    // Using call() with a blank object mocks the this context
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    console.log('Calling zero()');
    zero.call({});
};

two = () => {
    console.log('Running two()');
    debugIt();

    console.log('Calling one()');
    one();
};

three = () => {
    console.log('Running three()');
    debugIt();

    console.log('Calling two()');
    two();
};

function load(event) {
    console.log('App loaded', event);
    debugIt();

    // Will fire in this order:
    //   three() -> two() -> one() -> zero()
    three();
}

window.addEventListener('load', load);
