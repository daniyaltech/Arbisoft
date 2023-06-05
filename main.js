var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




const workSection = document.querySelector('.section1')
const workObserver = new IntersectionObserver((entries, observe)=>{
  const [entry]= entries;

  if(!entry.isIntersecting) return;

  
// counter

const counterNum = document.querySelectorAll(".count-num");
const speed = 50;

counterNum.forEach((curElem) =>{
  const updateNumber=()=>{
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNum = parseInt(curElem.innerText);
    const incrementNumber = Math.trunc(targetNumber/speed);
    if(initialNum < targetNumber){
      curElem.innerText = initialNum + incrementNumber;
      setTimeout(updateNumber, 30);
    }
  }
  updateNumber();
})

// for year num
const counterNums = document.querySelectorAll(".count-nums");
const speeds = 8;

counterNums.forEach((curElem) =>{
  const updateNumber=()=>{
    const targetNumber = parseInt(curElem.dataset.numbers);
    const initialNum = parseInt(curElem.innerText);
    const incrementNumber = Math.trunc(targetNumber/speeds);
    if(initialNum < targetNumber){
      curElem.innerText = initialNum + incrementNumber;
      setTimeout(updateNumber, 120);
    }
  }
  updateNumber();
})
// for odd num
const counterNumd = document.querySelectorAll(".count-numd");
const speedd = 3;

counterNumd.forEach((curElem) =>{
  const updateNumber=()=>{
    const targetNumber = parseInt(curElem.dataset.numberd);
    const initialNum = parseInt(curElem.innerText);
    const incrementNumber = Math.trunc(targetNumber/speedd);
    if(initialNum < targetNumber){
      curElem.innerText = initialNum + incrementNumber;
      setTimeout(updateNumber, 500);
    }
  }
  updateNumber();
});

    observe.unobserve(workSection);
},{
  root: null,
  threshold: 0,
})

workObserver.observe(workSection);

// 
// 
// 
// 

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 2,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
});


// const lists = document.getElementById('lists');
// const button = document.getElementById('butt');

// button.onmouseover=gone=()=>{
//   lists.classList.toggle('.list-visible')
// }


const cont = document.getElementById("list");

function tog(){
    cont.classList.toggle("list-visibe")
}


