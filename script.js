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

const toast =
document.getElementById(
"toast");

toast.style.display = "block";

const btn =
document.getElementById(
"downloadBtn");

btn.innerText =
"Fetching...";

setTimeout(()=>{

toast.style.display = "none";

btn.innerText =
"Download";

document.getElementById(
"result").style.display =
"block";

document.getElementById(
"videoTitle").innerText =

"Instagram Reel Downloaded";

document.getElementById(
"videoInfo").innerText =

"HD Quality • MP4 • Audio Supported • Ready to Download";

window.scrollTo({

top:
document.getElementById(
"result").offsetTop,

behavior:"smooth"

});

},2500);

}