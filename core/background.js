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
            sendResponse("aad");
        })
        updateList();

        
    }
    return true;
});

async function updateList(){
    const res=await fetch("https://raw.githubusercontent.com/nakasyou/SAKUYA/main/data/black-list.json");
    const json=await res.json();
    await chrome.storage.local.set({blacklist:json});
}