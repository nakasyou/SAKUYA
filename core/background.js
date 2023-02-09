chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message==='get-list'){
        chrome.storage.local.get(["blacklist"])
        .then(data=>{
            return data.blacklist
        }).then(data=>{
            if(!data){
                return updateList();
            }else{
                return;
            }
        }).then(data=>{
            return chrome.storage.local.get(["blacklist"])
        }).then(data=>{
            return data.blacklist;
        }).then(data=>{
            sendResponse(data);
        })
        updateList();
    }
    return true;
});

async function updateList(){
    const res=await fetch("https://raw.githubusercontent.com/nakasyou/SAKUYA/main/data/data.json");
    const json=await res.json();
    await chrome.storage.local.set({blacklist:json});
    console.log(await chrome.storage.local.get(["blacklist"]))
}