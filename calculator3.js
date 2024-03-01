const output = document.getElementById("output");

function operation(input){
				output.value += input;
}
function clearDisplay(){
				output.value = '';
}
function calculate(){
				output.value = eval(output.value);
}

