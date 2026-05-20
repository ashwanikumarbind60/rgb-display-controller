const API_URL =
"https://nova-backend-8hc2.onrender.com";

const downloadBtn =
document.getElementById("downloadBtn");

const urlInput =
document.getElementById("urlInput");

const toast =
document.getElementById("toast");

const resultSection =
document.getElementById("resultSection");

const videoPlayer =
document.getElementById("videoPlayer");

const videoSource =
document.getElementById("videoSource");

const thumbnail =
document.getElementById("thumbnail");

const videoTitle =
document.getElementById("videoTitle");

const videoDownloadBtn =
document.getElementById("videoDownloadBtn");

const audioDownloadBtn =
document.getElementById("audioDownloadBtn");

const thumbnailBtn =
document.getElementById("thumbnailBtn");

const copyBtn =
document.getElementById("copyBtn");

const btnText =
document.getElementById("btnText");

const btnLoader =
document.getElementById("btnLoader");

/* DOWNLOAD */

downloadBtn.addEventListener(
"click",
async()=>{

const reelUrl =
urlInput.value.trim();

if(!reelUrl){

alert(
"Paste Instagram Reel Link"
);

return;

}

/* LOADING */

btnText.style.display="none";

btnLoader.style.display="inline";

toast.style.display="block";

try{

const response =
await fetch(
`${API_URL}/download?url=${
encodeURIComponent(reelUrl)
}`
);

const data =
await response.json();

/* LOADING HIDE */

btnText.style.display="inline";

btnLoader.style.display="none";

toast.style.display="none";

/* SUCCESS */

if(data.success){

resultSection.style.display =
"block";

/* TITLE */

videoTitle.innerText =
data.title ||
"Instagram Reel";

/* THUMBNAIL */

thumbnail.src =
data.thumbnail;

/* VIDEO */

videoSource.src =
data.video;

videoPlayer.load();

/* DOWNLOAD VIDEO */

videoDownloadBtn.onclick =
()=>{

window.open(
data.video,
"_blank"
);

};

/* AUDIO */

audioDownloadBtn.onclick =
()=>{

window.open(
data.audio,
"_blank"
);

};

/* THUMBNAIL */

thumbnailBtn.onclick =
()=>{

window.open(
data.thumbnail,
"_blank"
);

};

/* COPY */

copyBtn.onclick =
()=>{

navigator.clipboard.writeText(
reelUrl
);

alert("Link Copied");

};

}else{

alert("Failed to fetch reel");

}

}catch(error){

btnText.style.display="inline";

btnLoader.style.display="none";

toast.style.display="none";

alert("Server Error");

console.log(error);

}

});