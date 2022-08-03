var brightness =document.getElementById("brightness")
var sepia =document.getElementById("sepia")
var invert =document.getElementById("invert")
var reset =document.getElementById("reset")
var imm =document.getElementById("imm")





brightness.addEventListener('click',function(){
	imm.style.filter="brightness(120%)";
		
})


invert.addEventListener('click',function(){
	imm.style.filter="invert(100%)";
		
})

sepia.addEventListener('click',function(){
	imm.style.filter="sepia(100%)";
		
})

reset.addEventListener('click',function(){
	imm.style.filter="none";
		
})