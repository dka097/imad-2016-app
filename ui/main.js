// couunter code
var button = document.getElementById('counter');

 button.onclick = function () {
    
    // create a request object
    var request = new XMLHttpRequest();
    
     //capture the responds and store it in a variable
     request.onreadystatechange = function() {
     if ( request.readystate === XMLhttpRequst.Done) {  //take some action
     if (request.status === 200) {
         var counter = request.responseText;
         var span = document.getElementById("count");
         span.innerHTML = counter.toString();
         
        }
     }
     // Not done yet
     };
     
     //Make a request
    request.open('GET', 'http://http://dka097.imad.hasura-app.io/counter',true);
    request.send(null);
 };