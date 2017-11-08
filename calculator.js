function main(button){
	// the eval() method evaluates string of integers
	var x = button.value;

	var y= document.getElementById('screen').innerHTML += x;
	if (button.value==="="){
		equal(y);
	}
	else if(button.value==="C"){
		clear(y);
	}


}

function clear(str){
	var newStr ="";
	document.getElementById('screen').innerHTML=newStr;
}
function equal(str){
	var newStr=str.replace("=","");
	
	console.log(newStr)
    document.getElementById('screen').innerHTML=eval(newStr);
}