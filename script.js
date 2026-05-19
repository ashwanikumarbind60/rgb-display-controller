window.onload = ()=>{

setTimeout(()=>{

document.getElementById(
"loader").style.display =
"none";

},1500);

};

function fakeLoading(){

const input =
document.getElementById(
"urlInput").value;

if(input === ""){

alert(
"Please paste Instagram link"
);

return;

}

const btn =
document.getElementById(
"downloadBtn");

btn.innerText =
"Fetching...";

setTimeout(()=>{

btn.innerText =
"Download";

document.getElementById(
"result").style.display =
"block";

window.scrollTo({

top:
document.getElementById(
"result").offsetTop,

behavior:"smooth"

});

},2000);

}