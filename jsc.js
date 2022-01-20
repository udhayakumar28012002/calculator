let outputscreen  =  document.getElementById("output-screen"); 

function display(num){
    outputscreen.value += num;
}
function calculate(){
    outputscreen.value = eval(outputscreen.value);
}
function clearingc(){
    outputscreen.value ="";
}