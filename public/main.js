function testFunction() {
    alert('working');
    var request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        //console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        }
        else if (request.readyState === 4) {
            //request is finished but there's some sort of problem
            callback('could not fetch data', undefined);
        }
    });
    request.open('GET', 'http://localhost:6767/sixseven');
    request.send();
}
function callback(err, data) {
    console.log('callback fired');
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
}
