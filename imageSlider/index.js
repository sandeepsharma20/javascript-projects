var images=document.querySelectorAll(".center .images img") ;
var index=0;
function next(){
images[index].style.display="none"
if(index===images.length-1)
    index=0
else
index++;
images[index].style.display="block"
}
function prev(){
images[index].style.display="none"
if(index===0)
    index=images.length-1;
index--;
images[index].style.display="block"
}
 let time=setInterval(next,2000)
 function playPause(option){
    if(option==="pause")
        clearInterval(time)
    else
      time=  setInterval(next,2000)
 }