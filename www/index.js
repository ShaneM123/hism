/*
*@param {Event}
*@return {void}
*/
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    // Make sure the element has the required properties.
    if (isValidElement(element) && isValidValue(element)) {

        /*
         * Some fields allow for more than one value, so we need to check if this
         * is one of those fields and, if so, store the values as an array.
         */
        if (isCheckbox(element)){
            data[element.name] = (data[element.name] || []).concat(element.value);
        } else if(isMultiSelect(element)) {
            data[element.name] = getSelectValues(element);
        } else {
        data[element.name] = element.value;
    }
    }
    return data;
}, {});

const handleFormSubmit = event => {
    event.preventDefault();
    const data = formToJSON(form.elements);

    const dataContainer = document.getElementsByClassName('results__display')[0];

    dataContainer.textContent = JSON.stringify(data, null, " ");
};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);
/**
 * Checks that an element has a non-empty `name` and `value` property.
 * @param  {Element} element  the element to check
 * @return {Bool}             true if the element is an input, false if not
 */

const isValidElement = element => { return element.name && element.value; };

/**
 * Checks if an element’s value can be saved (e.g. not an unselected checkbox).
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the value should be added, false if not
 */
const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

/**
 * Checks if an input is a checkbox, because checkboxes allow multiple values.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a checkbox, false if not
 */
const isCheckbox = element => element.type === 'checkbox';

/**
 * Checks if an input is a `select` with the `multiple` attribute.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a multiselect, false if not
 */
const isMultiSelect = element => element.options && element.multiple;

/**
 * Retrieves the selected options from a multi-select as an array.
 * @param  {HTMLOptionsCollection} options  the options for the select
 * @return {Array}                          an array of selected option values
 */
const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return option.selected ? values.concat(option.value) : values;
}, []);























/*

window.addEventListener("load", function () {

    function  sendData() {
        const XHR = new XMLHttpRequest();
        const FD = new FormData( form );

        XHR.addEventListener("load", function(event){
            alert( event.target.responseText);
        });
        XHR.addEventListener("error", function ( event ){
            alert('Oops! something went wrong.' );
        });
        XHR.open("POST", "http://localhost:8998/users");
        XHR.send( FD );
    }
    let form = document.getElementById( "theForm" );

    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();

        sendData();

    });
});
*/


// create JSON
/*const json = {
    username: '',
    password: ''
};
//request options
const options = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
        'Content-Type': 'application/json'
    }
}
//send post request
fetch('/login', options)*/

























/*

var http = require('http');
var port = 8999;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello there, world\n');
}).listen(port);

console.log("Listening on port " + port);


*/












/*
var http = require('http');
var qs = require('querystring');
var formOutput = '<html><body>'
    + '<h1>XYZ Repository Commit Monitor</h1>'
    + '<form method="post" action="inbound" enctype="application/x-www-form-urlencoded"><fieldset>'
    + '<div><label for="UserName">User Name:</label><input type="text" id="UserName" name="UserName" /></div>'
    + '<div><label for="Repository">Repository:</label><input type="text" id="Repository" name="Repository" /></div>'
    + '<div><label for="Branch">Branch:</label><input type="text" id="Branch" name="Branch" value="master" /></div>'
    + '<div><input id="ListCommits" type="submit" value="List Commits" /></div></fieldset></form></body></html>';
var serverPort = 8998;

completelogin = http.createServer(function (request, response) {
    if(request.method === "GET") {
        if (request.url === "/favicon.ico") {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(formOutput);
        }
    } else if(request.method === "POST") {
        if (request.url === "/inbound") {
            var requestBody = '';
            request.on('data', function(data) {
                requestBody += data;
                if(requestBody.length > 1e7) {
                    response.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
                    response.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
                }
            });
            request.on('end', function() {
                var formData = qs.parse(requestBody);
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write('<!doctype html><html><head><title>response</title></head><body>');
                response.write('Thanks for the data!<br />User Name: '+formData.UserName);
                response.write('<br />Repository Name: '+formData.Repository);
                response.write('<br />Branch: '+formData.Branch);
                response.end('</body></html>');
            });
        } else {
            response.writeHead(404, 'Resource Not Found', {'Content-Type': 'text/html'});
            response.end('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
        }
    } else {
        response.writeHead(405, 'Method Not Supported', {'Content-Type': 'text/html'});
        return response.end('<!doctype html><html><head><title>405</title></head><body>405: Method Not Supported</body></html>');
    }
}).listen(serverPort);
console.log('Server running at localhost:'+serverPort);*/
