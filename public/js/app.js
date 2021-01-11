function logHeading(msg) {
    console.log(
        `\n\n%c${msg}`,
        'font-weight: bold; font-size: 18px; color: #009900; text-decoration: underline;'
    );
}

function logs() {
    // console.log()
    console.log('This is console.log()');
    console.info('This is console.info()');
    console.debug('This is console.debug()');

    // console.warning()
    console.warn('This is console.warn(), notice it includes the stack trace');

    // console.error()
    console.error('This is console.error(), notice it includes the stack trace');

    // Multiple values
    console.log('You can log various types', true, {}, [], 12345, () => {})

    // Interpolation
    const string = 'foo-bar-baz'
    console.log(`You can interpolate values with string literals "${string}"`);
    console.log('Or by concatenation "' + string + '"');

    // Styling
    console.log('%cYou can also style the output', 'font-style: italic; font-size: 16px; color: red');
}

function groups() {
    console.log('No grouping');

    // Up one level to 2
    console.group();
    console.log('Up to level 2');

    // Up another level to 3
    console.group();
    console.log('Up to level 3');
    console.warn('A message in level 3');
    console.error('Another message in level 3');

    // Down a level back to 2
    console.groupEnd();
    console.log('Back to level 2');

    // Back to ground level
    console.groupEnd();
    console.log('No grouping');
}

function tables() {
    console.log('Table of objects');
    const objects = [
        { roast: 'Light',   flavors: 'Citrus, Honey, Berry' },
        { roast: 'Medium',  flavors: 'Caramel' },
        { roast: 'Dark',    flavors: 'Chocolate, Smoke' },
    ];
    console.table(objects);

    console.log('Table of arrays');
    const arrays = [
        ['Peter',   'Parker'],
        ['Miles',   'Morales'],
        ['Gwen',    'Stacy'],
    ];
    console.table(arrays);
}

function load(event) {
    console.log('App loaded', event);

    // Examples of output using the console
    // Logging levels can be output with a specific severity
    // Note: console.debug() is hidden by default in some browsers
    //    - console.log() (aliased by console.debug() and console.info())
    //    - console.warn()
    //    - console.error()
    // https://developer.mozilla.org/en-US/docs/Web/API/console

    // https://developer.mozilla.org/en-US/docs/Web/API/Console/log
    // https://developer.mozilla.org/en-US/docs/Web/API/Console/info
    // https://developer.mozilla.org/en-US/docs/Web/API/Console/debug
    // https://developers.google.com/web/tools/chrome-devtools/console/log
    logHeading('Message Examples');
    logs();

    // https://developer.mozilla.org/en-US/docs/Web/API/Console/group
    logHeading('Group Examples');
    groups();

    // https://developer.mozilla.org/en-US/docs/Web/API/Console/table
    logHeading('Table Examples');
    tables();
}

window.addEventListener('load', load);
