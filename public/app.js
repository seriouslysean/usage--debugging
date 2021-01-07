let totalCount = 0;

function doButtonCount(event) {
    event.preventDefault();
    totalCount = totalCount += 1;
    console.log('Button count =', totalCount);
}

(function init() {

    console.info('App ready!');

    const button = document.querySelector('#button-do-something');
    button.addEventListener('click', doButtonCount);
    // Different function signature, so it'll do a second count
    button.addEventListener('click', (event) => { doButtonCount(event); });

 })();
