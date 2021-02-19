    // STICKY STYLE NAV BAR
window.onscroll = function(){
    let nav = document.getElementById("Nav");
    let totalNav = document.getElementById("totalNav");
    let logoWrapper = document.getElementById("logoWrapper");
    let logo = document.getElementById("logo");
    let listItem  = document.getElementById("listItem");
    let PCmediaQuery = window.matchMedia("(min-width: 900px)");
    let MbmediaQuery = window.matchMedia("(max-width: 900px)");


   if (PCmediaQuery.matches) {
    if(window.pageYOffset > 120){
      nav.style.position="fixed";
            nav.style.backgroundColor="rgba(255, 255, 255, 0.9)";
            nav.style.height="60px";
            logoWrapper.style.marginTop="-32px";
            logo.style.width="120px";
            logo.style.heigth="65px";
            listItem.style.marginTop="-7%";
    }else{
            nav.style.position="absolute";
            nav.style.backgroundColor="transparent";
            logoWrapper.style.marginTop="-4px";
            logo.style.width="145px";
            logo.style.heigth="45px";
            listItem.style.marginTop="-2%";
    }

  }

  if (MbmediaQuery.matches) {
    if(window.pageYOffset > 120){
            nav.style.position="fixed";
            totalNav.style.backgroundColor="transparent";
            nav.style.backgroundColor="#ffffff";
    }else{
      nav.style.position="absolute";
      totalNav.style.backgroundColor="#ffffff";
      nav.style.backgroundColor="";
    }

  }
               
}


//HAMBURGER AND CROSS ICON FUNCTION FOR NAVMENU MOBILE VIEW 
let hamburger= document.querySelector(".hamburger");
let listitem= document.querySelector(".listItem");
let cross= document.querySelector(".cross");

hamburger.addEventListener('click', ()=>{
listitem.style.width="250px";
document.getElementById('wrapper').style.left="-35%";
document.getElementById('listItem').style.display="block";

})

cross.addEventListener('click', ()=>{
listitem.style.width="0px";
document.getElementById('wrapper').style.left="0";
document.getElementById('listItem').style.display="none";

})