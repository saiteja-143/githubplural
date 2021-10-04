//  Calculator

// Clearscreen function 
function clearscreen(){
    document.getElementById("result").value="";
}

// Display function 

function display(val){
    document.getElementById("result").value+=val;
}


// Evaluating function

function calculate(){
    var p = document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}