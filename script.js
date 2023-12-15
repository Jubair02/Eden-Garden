const btn=document.getElementsByClassName("btn");
const slide=document.getElementById('slide');
let btnanimation=()=>{
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active");
}

btn[0].onclick =function(){
    slide.style.transform="translateX(0px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active");

}
btn[1].onclick =function(){
    slide.style.transform="translateX(-800px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active");

}
btn[2].onclick =function(){
    slide.style.transform="translateX(-1600px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active");

}
btn[3].onclick =function(){
    slide.style.transform="translateX(-2400px)";
    for(i=0;i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active");

}

//Social Accounting

function jubuFb(){
    window.open('https://www.facebook.com/profile.php?id=100008640487605');
}
function jubuinstra(){
    window.open('https://www.instagram.com/juubair24/');
}
function nayeemFb(){
    window.open('https://www.facebook.com/nayeemulislam.nayeem.79');
}
function nayeemistra(){
    window.open('https://www.instagram.com/nay__eem/');
}
function asifFb(){
    window.open('https://www.facebook.com/profile.php?id=100010407282305');
}
function asifinstra(){
    window.open('https://www.instagram.com/as_if_uknow/');
}
function mirazFb(){
    window.open('https://www.facebook.com/mdmiraz.019888');
}
function mirazinstra(){
    window.open('https://www.instagram.com/its_mi_raz_101/');
}
