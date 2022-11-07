const altitudeLoss = document.querySelector('.altitude-loss');

let loss = 0;
let altitudeDrop = 0;



//CONTROLS

const exitAlt = document.getElementById('exit-altitude');
const pullAlt = document.getElementById('pull-altitude');

const go = document.getElementById('go');

let exitChoice = exitAlt.value;
let pullChoice = pullAlt.value;

go.addEventListener('click', () => {
  exitChoice = exitAlt.value;
  pullChoice = pullAlt.value;

  loss = 100 - (exitChoice * 6.25) - 1.06282999;

  const dropAlittude = setInterval(() => {
    altitudeDrop = loss + 1.1;
    altitudeLoss.style.height = altitudeDrop + '%';
    loss = loss + 0.011;



    if ((100 - (pullChoice * 6.25) - 1.06282999) < altitudeDrop) {
      clearInterval(dropAlittude);
    }




  }, 10);




});
