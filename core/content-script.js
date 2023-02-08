//add main.js
const moduleScript=document.createElement("script");
moduleScript.type="module";
moduleScript.id="SAKUYA-extention"
moduleScript.src=chrome.runtime.getURL("./core/main.js");
moduleScript.onload=()=>{
    postMessage({
        type:"SAKUYA",
        SAKUYAURL:chrome.runtime.getURL(""),
    }, location.origin)
}
function appendScript(){
    try{
        document.head.append(moduleScript);
    }catch(e){
        setTimeout(() => {
            appendScript()
        }, 0);
    }
}
appendScript();

chrome.runtime.sendMessage("get-list",res=>{
    alert(res);
});