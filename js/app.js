// counter up section start
let counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
  let endingValue = counter.dataset.num;
  let count = 0;
  let counting = setInterval(() => {
    counter.innerHTML = count++;
    if ( count > endingValue){
      clearInterval(counting)
    }
  }, (10 / endingValue));
});
// counter up section ends

// popup massage start
let btn =  document.querySelector('.btn')
let msg = document.querySelector('.msg')
btn.addEventListener('click', ()=>{
    msg.classList.add("active")
    setTimeout(() => {
        msg.classList.remove("active")
    }, 4000);
})
// popup massage ends