// require the nightmare library
var Nightmare = require('nightmare');

// create a new browser window
var nightmare = Nightmare({ show: true });

nightmare
    .goto('http://services.runescape.com/m=itemdb_rs/viewitem.ws?obj=536')
    .wait('.stats') // the wait method will wait for the element with this selector to appear on the page

    // evaluate code IN THE NIGHTMARE BROWSER
    .evaluate(function () {
        
        // pass data from the nightmare browser back to this express app
        return document.querySelector('#grandexchange > div.stickyWrap > div.contents > main > div.content.roughTop > div.stats > h3 > span').title
    })

    // close the browser window
    .end()
    // the result passed into this function is the value we returned from evaluate
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });