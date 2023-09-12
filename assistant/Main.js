// toggle button
let subMenu = document.getElementById('subMenu');
function ToggleMenu(){
    subMenu.classList.toggle("openMenu");
}

// moving Bars 
let skillSection = document.querySelector("#Skills");
let spans = document.querySelectorAll("#Skills .skillsBox .theProgres span");

// stats number
let nums = document.querySelectorAll("#stats .statsBox .number");
let statsSection = document.querySelector("#stats");
let started = false;

// scroll top
let arorowTop = document.querySelector(".arrowTop");

window.onscroll = function () {
        // animated bars
        if (window.scrollY >= skillSection.offsetTop) {
            spans.forEach((span) => {
            span.style.width = span.dataset.width;
            });
        }
        // increas numbers
        if (window.scrollY >= statsSection.offsetTop - 300) {
            if (!started) {
            nums.forEach((number) => numberCounter(number));
            }
            started = true;
        }
        // scroll to top
        if(window.scrollY >= 400 ){
            arorowTop.style.display = 'flex';
        }else{
            arorowTop.style.display = "none";
        }
};


function numberCounter(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(count);
    }
    }, 100 / goal);
}

arorowTop.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})


// timer countdown

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff =  countDownDate - dateNow ;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML=days;

    let Hours = Math.floor((dateDiff % (1000 * 60 * 60  * 24) / (1000 * 60 * 60)));
    document.querySelector(".hours").innerHTML = Hours < 10 ? "0" + Hours : Hours;

    let miuntes = Math.floor((dateDiff % (1000 * 60 * 60 )) / 1000 / 60 );
    document.querySelector(".miuntes").innerHTML = miuntes < 10 ? "0" + miuntes : miuntes;

    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000 );
    document.querySelector(".seconds").innerHTML = seconds <10 ? "0" + seconds : seconds;

    if(dateDiff == 0){
        clearInterval(counter);
    }

},1000)


