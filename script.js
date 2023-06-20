//your JS code here. If required.
const select = document.getElementById("colorSelect");
const btn  = document.getElementsByTagName("input")[0];

btn.addEventListener("click",function(){
	console.log("Hello")
	let arr = select.children; 
	for(let i=0;i<arr.length;i++){
		if(arr[i].value === select.value){
			arr[i].remove();
		}
	}
console.log(select.children);
});