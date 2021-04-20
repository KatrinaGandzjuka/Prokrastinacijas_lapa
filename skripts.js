const POP_UP = document.getElementById('popUp');
let darbini = [];


var textWrapper = document.querySelector('.animacija .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animacija .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.animacija .line',
    translateX: [0, document.querySelector('.animacija .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.animacija .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.animacija',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  window.addEventListener('load', () => {
    darbini = JSON.parse(localStorage.getItem("darbini") || "[]");
    console.log(darbini)
    render();
});

document.getElementById('jaunsUzdevums').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})