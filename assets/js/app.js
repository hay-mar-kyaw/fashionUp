// Search Input Change
let search_input=document.getElementById('search-input');
let icon_items=document.getElementsByClassName('icon-items');
search_input.onfocus=function(){
    for(let item of icon_items){
        item.style.display='none'
    }
    search_input.style.width="100%";
}
search_input.onblur=function(){
    for(let item of icon_items){
        item.style.display='block'
    }
    search_input.style.width="65px";


}
// Navbar Bg JS 
let nav= document.getElementById('nav');
window.onscroll=function(){
    if(window.pageYOffset > 200){
       nav.classList.add('bg');
    }else{
        nav.classList.remove('bg');
    }
}
// Navbar Show and Hide 
let hamburger=document.getElementById('hamburger');
let navbar_menu=document.getElementById('navbar-menu');

hamburger.onclick=function(){
    navbar_menu.classList.toggle('active');
    
    if(hamburger.innerHTML==`<i class="fas fa-bars"></i>`){
        // console.log('hamburger');
        hamburger.innerHTML=`<i class="fas fa-times"></i>`;
    }else{
        hamburger.innerHTML=`<i class="fas fa-bars"></i>`
    }
}

// Slider JS 
let next_btn = document.getElementById('next-btn');
let prev_btn = document.getElementById('prev-btn');
let sliders=document.getElementsByClassName('slider');
let slider_no=1;

function next(){
    document.getElementById('slider'+slider_no).classList.remove('active');
    slider_no++;
    if(slider_no > sliders.length){
        slider_no=1;
    }
    document.getElementById('slider'+slider_no).classList.add('active');
}

function prev(){
    document.getElementById('slider'+slider_no).classList.remove('active');
    slider_no--;
    if(slider_no < 1){
        slider_no=sliders.length;
    }
    document.getElementById('slider'+slider_no).classList.add('active');

}
next_btn.onclick= next;
prev_btn.onclick= prev;

setInterval(next,3000);

// Products Filter 
let all_btn =document.getElementById('all_btn')
let cloth_btn =document.getElementById('cloth_btn')
let watch_btn =document.getElementById('watch_btn')
let shoe_btn =document.getElementById('shoe_btn')

let cloth_cards=document.getElementsByClassName('cloth')
let watch_cards=document.getElementsByClassName('watch')
let shoe_cards=document.getElementsByClassName('shoe')

all_btn.onclick=function(){
    for(let cloth_card of cloth_cards){
        cloth_card.style.display="block"
    }
    for(let watch_card of watch_cards){
        watch_card.style.display="block"
    }
    for(let shoe_card of shoe_cards){
        shoe_card.style.display="block"
    }
    this.classList.add('active')
    cloth_btn.classList.remove('active')
    shoe_btn.classList.remove('active')
    watch_btn.classList.remove('active')
}
cloth_btn.onclick=function(){
    for(let cloth_card of cloth_cards){
        cloth_card.style.display="block"
    }
    for(let watch_card of watch_cards){
        watch_card.style.display="none"
    }
    for(let shoe_card of shoe_cards){
        shoe_card.style.display="none"
    }
    this.classList.add('active')
    all_btn.classList.remove('active')
    shoe_btn.classList.remove('active')
    watch_btn.classList.remove('active')
}
shoe_btn.onclick=function(){
    for(let cloth_card of cloth_cards){
        cloth_card.style.display="none"
    }
    for(let watch_card of watch_cards){
        watch_card.style.display="none"
    }
    for(let shoe_card of shoe_cards){
        shoe_card.style.display="block"
    }
    this.classList.add('active')
    all_btn.classList.remove('active')
    cloth_btn.classList.remove('active')
    watch_btn.classList.remove('active')
}

watch_btn.onclick=function(){
    for(let cloth_card of cloth_cards){
        cloth_card.style.display="none"
    }
    for(let watch_card of watch_cards){
        watch_card.style.display="block"
    }
    for(let shoe_card of shoe_cards){
        shoe_card.style.display="none"
    }
    this.classList.add('active')
    all_btn.classList.remove('active')
    cloth_btn.classList.remove('active')
    shoe_btn.classList.remove('active')
}


