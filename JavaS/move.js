let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let Aqsa =document.querySelector('.Aqsa');
window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value+"px";
    moon.style.top=value*4+"px";
    mountains3.style.top=value*2+"px";
    mountains4.style.top=value*1.5+"px";
    river.style.top=value+"px";
    boat.style.top=value+"px";
    boat.style.left=value*3+"px";
    Aqsa.style.fontSize=value+"px";
    if(scrollY>=60){
        Aqsa.style.fontSize=60+"px";
        Aqsa.style.position="fixed";
        if(scrollY>=395){
            Aqsa.style.display="none";
        }else{
            Aqsa.style.display="block";
        }
        if(scrollY>=92){
            document.querySelector('.main').style.background='linear-gradient(#2857a6,#10001f)'
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)'
        }

    }
    
}