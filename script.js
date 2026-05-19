window.onload = ()=>{

setTimeout(()=>{

document.getElementById(
"loader").style.display =
"none";

},1500);

};

async function fakeLoading(){

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

try{
document.getElementById(
"loader"
).style.display = "inline";

document.getElementById(
"btnText"
).style.display = "none";

document.getElementById(
"downloadBtn"
).disabled = true;

document.getElementById(
"errorBox"
).style.display = "none";
const response = await fetch(

"https://nova-backend-8hc2.onrender.com/download",

{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({

url:input

})

}

);

const data =
await response.json();

toast.style.display = "none";

btn.innerText =
"Download";

document.getElementById(
"resultBox").style.display =
"flex";

document.getElementById(
"thumbnail").src =
data.thumbnail;

document.getElementById(
"videoTitle").innerText =
data.title;

document.getElementById(
"videoInfo").innerText =

"HD Quality • MP4 • Audio Supported • Ready";

document.querySelector(
"video source"
).src = data.video;

document.querySelector(
"video"
).load();
document.getElementById(
"videoDownloadBtn"
).onclick = ()=>{

const a =
document.createElement("a");

a.href = data.video;

a.download =
data.title + ".mp4";

a.click();

};

document.getElementById(
"thumbnailBtn"
).onclick = ()=>{

const a =
document.createElement("a");

a.href = data.thumbnail;

a.download =
"thumbnail.jpg";

a.click();

};

document.getElementById(
"copyBtn"
).onclick = ()=>{

navigator.clipboard.writeText(
input
);

alert(
"Link copied"
);

};

document.getElementById(
"audioDownloadBtn"
).onclick = ()=>{

alert(
"MP3 conversion coming soon"
);

};

window.scrollTo({

top:
document.getElementById(
"result").offsetTop,

behavior:"smooth"

});

}catch(error){

alert(
"Server Error"
);

console.log(error);

}

}