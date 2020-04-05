/*
*@param {Event}
*@return {void}
*/
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    data[element.name] = element.value;
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
