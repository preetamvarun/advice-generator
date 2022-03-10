const generateAdvice = document.getElementById("generate-advice");
const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("advice");
const adv = document.getElementById("adv");

// let getAdvice = (url) => {
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         advice.textContent = "";
//         advice.innerHTML += '<span>&#8220;</span>';
//         advice.textContent +=  data.slip.advice;
//         advice.innerHTML += '<span>&#8221;</span>';
//         adv.innerHTML = `Advice <span id = "advice-id">#${data.slip.id}</span>`;
//     })
//     .catch(err => (console.log(err)));
// }


let getAdvice = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    advice.textContent = "";
    advice.innerHTML += '<span>&#8220;</span>';
    advice.textContent +=  data.slip.advice;
    advice.innerHTML += '<span>&#8221;</span>';
    adv.innerHTML = `Advice <span id = "advice-id">#${data.slip.id}</span>`;
}


generateAdvice.addEventListener('click',() => getAdvice("https://api.adviceslip.com/advice"));

document.addEventListener('DOMContentLoaded', () => getAdvice("https://api.adviceslip.com/advice"));