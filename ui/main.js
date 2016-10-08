// couunter code
var button = document.getElementById('counter');
var counter = 0;
 button.onclick = function () {
    
    // Make a request is the couunter 
    
     //capture the responds and store it is a variable
     //Render the variable in the correct span
     counter = counter + 1;
     var span = document.getElementById('count');
     span.innerHTML = counter.toString();
 };