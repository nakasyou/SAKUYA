export default function(resource,list){
    const request=new Request(resource);
    let url=new URL(request.url);
    url.search="";
    url=url.toString();
    console.log(url)
    for(const black of list.black_url){
        const pattern=new URLPattern(black);
        if(pattern.test(url)){
            return "https://cdn.jsdelivr.net/npm/package@version/file";
        }
    }
    return url;
}