'use strict';
// import {ScrollReveal} from '../node_module/scrollreveal';

// import ScrollReveal from '../node_modules/scrollreveal/dist/scrollreveal.es.js'

const button = document.querySelector(".but");
button.addEventListener('click',function(){

  const list = document.querySelector(".list");
  list.classList.toggle('hidden')

})





const sr = ScrollReveal({
    distance:'60px',
    duration: 2500,
    delay:400,
    reset:false
})

sr.reveal('.pic',{delay:200,origin:'right',reset:true});
sr.reveal('.pic-l',{delay:200,origin:'left',reset:true});
sr.reveal('.left',{delay:200,origin:'left'});
sr.reveal('.bottom',{delay:200,origin:'bottom'});
sr.reveal('.top',{delay:200,origin:'top'});
sr.reveal('.right',{delay:200,origin:'right'});
