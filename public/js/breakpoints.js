const CONTEXT_DEFAULT = {
    name: 'CONTEXT_DEFAULT',
};
const CONTEXT_OVERRIDE = {
    name: 'CONTEXT_OVERRIDE',
};
const CONTEXT_BOUND = {
    name: 'CONTEXT_BOUND',
};

function breakpoints() {
    // Define base values to modify
    const a = 'foo';
    const b = 'bar';
    let c = null;
    let d;

    // Set the default values to the current this context
    this.a = a; // foo
    this.b = b; // bar
    this.c = c; // null
    this.d = d; // undefined

    console.log(this);
    console.log('Set a breakpoint here to see the variables listed above (a, b, c, d)');
    console.log('"this" should be the CONTEXT_DEFAULT object with the variables as keys');
    console.log('a=foo, b=bar, c=null and d=undefined');
    // BREAK, Add breakpoint here in devtools

    function override() {
        if (this === window) {
            // If this is the global this context, we'll ignore it
            console.log(this);
            console.log('Set a breakpoint here to see the "this" context');
            console.log('"this" should be the window object');
            // BREAK, Add breakpoint here in devtools
            return;
        }

        this.a = 'baz';
        this.b = 'qux';
        this.c = 'quux';
        this.d = 'corge';

        // "this" context should be whatever object we called with or bound instead
        console.log(this);
        console.log('Set a breakpoint here to see the "this" context');
        console.log('"this" should be the CONTEXT_OVERRIDE object');
        // BREAK, Add breakpoint here in devtools
    }

    // Without call, the "this" context will be the window object because this is a global function
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    override();

    // We can also override the "this" context of a function by using call
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    override.call(CONTEXT_OVERRIDE);

    // We could also use bind to make a new function reference with the this proper this context
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    const boundOverride = override.bind(CONTEXT_BOUND);
    boundOverride();
}

function load(event) {
    console.log('App loaded', event);

    breakpoints.call(CONTEXT_DEFAULT);
}

window.addEventListener('load', load);
