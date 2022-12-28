//SUBMENU-SEARCH,,
//돋보기
const searchEl=document.querySelector(".search");
const searchInputEl=searchEl.querySelector("input"); //document가 아닌 searchEl에서만 input요소를 찾는 것

//돋보기 그림을 눌러도 input창이 열리도록
searchEl.addEventListener("click",function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener("focus",function(){
    searchInputEl.setAttribute("placeholder","통합 검색");
});

//focus랑 반대되는 동작인 blur
//돋보기가 줄어들었을 때 글자 남아있지 않도록
searchInputEl.addEventListener("blur",function(){
    searchInputEl.setAttribute("placeholder","");
});

//SWIPER
//NOTICE >> SWIPER
const swiperNotice = new Swiper(".notice .notice-line .swiper",{ //Swiper 라이브러리 호출하는 것
    //셍성자에 대한 기본값 설정하기
    direction: "vertical",
    loop:true,
    autoplay:true,
});

const swiperPromotion=new Swiper(".promotion .swiper",{
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween : 10,
    centeredSlides :true,
    loop:true,
    autoplay:{
        delay: 1000,
        disableOnInteraction:false,
    },
    pagination:{ //사진여러장이라 아래 쩜쩜쩜
        el: ".promotion .swiper-pagination",
        clickable:true,
    },
    navigation:{
        prevEl:".promotion .swiper-button-prev",
        nextEl:".promotion .swiper-button-next",
    },

});

//SWIPER PROMOTION AUTOPLAY CONTROL
function controlAutoPlay(){
    if(swiperPromotion.autoplay.running===true){
        swiperPromotion.autoplay.stop();
    }else{
        swiperPromotion.autoplay.start();
    }
}

//TOGGLE PROMOTION
const promotionEl =document.querySelector(".promotion");
const promotionToggleBtn =document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click",function(){
    if(promotionEl.classList.contains("hide")){
        promotionEl.classList.remove("hide");
    }else{
        promotionEl.classList.add("hide");
    }
    if(promotionToggleBtn.style.transform==="rotate(180deg)"){
        promotionToggleBtn.style.transform="rotate(0deg)";
    }else{
        promotionToggleBtn.style.transform="rotate(180deg)";
    }
});


//SCROLL ANIMATION
//start scroll? -onload!!

window.onload=()=>{
    const visualInner=document.querySelector(".visual .inner");
    visualInner.classList.add("animate");
}/*
window.onload(function(){~}); 구조와 같은 것
*/

let scrollYpos;


let peruImg=document.querySelector(".peru .inner .img_product");
let peruContent=document.querySelector(".peru__contents");
window.addEventListener("scroll",function(){
    scrollYpos=window.scrollY;

    if(scrollYpos>250){ //PERU
        peruImg.style=" transform: translate(0px, 0); opacity: 1;transition: 2.5s;";
        peruContent.style="transform: translate(0px, 0); transition: 2.5s;";
    }
    if(scrollYpos>800){ //INDONESIA else if로 묶으면 안대.
        const indoAni=this.document.querySelector(".indonesia");
        indoAni.classList.add("animate");
    }
});



//FAVORITE
let favContent1=document.querySelector(".favorite__title_1");
let favContent2=document.querySelector(".favorite__title_2");
window.addEventListener("scroll",function(){
    scrollYpos=window.scrollY;

    if(scrollYpos>1100){
        favContent1.style=" transform: translate(0px); transition: 2s;";
        favContent2.style="transform: translate(0px); transition: 2.5s;";
    }
});

//MAGAZINE
let magazineImg=document.querySelector(".magazine__img");

window.addEventListener("scroll",function(){
    scrollYpos=window.scrollY;

    if(scrollYpos>2000){
        magazineImg.style="opacity: 1;";
    }
});

//STORE
let storeImg1=document.querySelector(".store__img_1");
let storeImg2=document.querySelector(".store__img_2");
let storeImg3=document.querySelector(".store__img_3");
let storeImg4=document.querySelector(".store__img_4");
let storeContent1=document.querySelector(".store__title_1");
let storeContent2=document.querySelector(".store__title_2");
let storeBtn=document.querySelector(".store .btn");
window.addEventListener("scroll",function(){
    scrollYpos=window.scrollY;

    if(scrollYpos>2400){
        storeImg1.style="opacity:1;";
        storeImg2.style="opacity:1;";
        storeImg3.style="opacity:1;";
        storeImg4.style="opacity:1;";
        storeContent1.style="transform: translate(0px, 0); transition: 2s;";
        storeContent2.style="transform: translate(0px, 0); transition: 2.5s;";
        storeBtn.style="transform: translate(0px, 0); transition: 3s;";
    }
});