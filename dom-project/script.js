var btn=document.getElementById("btn")
var para=document.getElementById("para");

var text1="Life teaches patience courage kindness honesty gratitude respect discipline humility focus strength wisdom love hope dreams faith persistence passion clarity growth trust freedom peace balance simplicity harmony success"
var text2="Happiness courage wisdom strength patience honesty kindness gratitude respect peace love hope trust freedom balance clarity growth discipline determination success faith "

function fun(){
   
    if(btn.innerHTML==="change"){
       para.innerHTML=text1
        btn.innerHTML="reset"
        para.style.backgroundColor="green"
    }else{

        para.innerHTML=text2
        btn.innerHTML="change"
        para.style.backgroundColor="gray"
    }
}
var colors=["black","red","pink","navy"]
var index=0;

setInterval(()=>{
para.style.backgroundColor=colors[index]
if(index===colors.length-1)
    index=0;

else
    index++;
},2000)
setInterval()