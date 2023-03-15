let textcontainer=document.querySelector(".textcontainer");
let enterKey=document.querySelector(".enter");
let spaceKey=document.querySelector(".space");
let deleteKey=document.querySelector(".delete");
let capsLock=document.querySelector(".capslock");
let allKeys=document.querySelectorAll(".key");
let isCaps=false;



enterKey.addEventListener("click",function(){
    let content=textcontainer.innerText;
    let newContent=content+"\n";
    textcontainer.innerText=newContent;
})

spaceKey.addEventListener("click",function(){
    let content=textcontainer.innerText;
    let newContent=content+'\u00A0';
    textcontainer.innerText=newContent;

})
deleteKey.addEventListener("click",function(){
    let content=textcontainer.innerText;
    let newContent=content.slice(0,content.length-1);
    textcontainer.innerText=newContent ;
    console.log(newContent);
    

})

capsLock.addEventListener("click",function(){
    if(isCaps){
        capsLock.classList.remove("active");
        for(let key of allKeys){
            if(key.classList.length>1){
                //donothing
            }else{
                key.innerText=key.innerText.toLowerCase();
            }
        }

    }else{
        capsLock.classList.add("active");
        for(let key of allKeys){
            if(key.classList.length>1){
                //donothing
            }else{
                key.innerText=key.innerText.toUpperCase();
            }
        }

    }
    isCaps=!isCaps;

})

for(let key of allKeys){
    if(key.classList.length>1){

    }else{
        key.addEventListener("click",function(){
            textcontainer.innerText+=key.innerText;
        })
    }
}