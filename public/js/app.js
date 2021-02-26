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
    // Methods that take a string also support substitution
    //     - %s Formats the value as a string
    //     - %i Formats the value as an integer
    //     - %d Formats the value as an integer
    //     - %f Formats the value as a floating point value
    //     - %o Formats the value as an expandable DOM element. As seen in the Elements panel
    //     - %O Formats the value as an expandable JavaScript object
    //     - %c Applies CSS style rules to the output string as specified by the second parameter
    // https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions
    const strings = ['foo', 'bar', 'baz'];
    console.log(`You can interpolate values with string literals "${strings[0]}"`);
    console.log('Or by concatenation "' + strings[1] + '"');
    console.log('Even by type, "%s" (string), "%d" (integer)', strings[2], 35);

    // Styling
    console.log('%cYou can also style the output', 'font-style: italic; font-size: 16px; color: red');
}

function dirs() {
    const coffee = { roast: 'Light',   flavors: 'Citrus, Honey, Berry' };
    console.log('console.log() prints the toString representation of the object', coffee);
    console.log('while dir() recognizes the object and prints the properties only');
    console.dir(coffee);
}

function groups() {
    console.log('No grouping');

    // Up one level to 2
    console.group();
    console.log('Up to level 2');

    // Up another level to 3
    console.groupCollapsed();
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

    // https://developer.mozilla.org/en-US/docs/Web/API/Console/dir
    logHeading('Dir Examples');
    dirs();

    // https://developer.mozilla.org/en-US/docs/Web/API/Console/group
    logHeading('Group Examples');
    groups();

    // https://developer.mozilla.org/en-US/docs/Web/API/Console/table
    logHeading('Table Examples');
    tables();
}

window.addEventListener('load', load);
