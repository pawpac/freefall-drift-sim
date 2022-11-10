const altitudeLoss = document.querySelector('.altitude-loss');
const altiLines = document.querySelectorAll('.altitude');
const arm = document.querySelector('.arm-container');

let loss = 0;
let altitudeDrop = 0;

//test

let init = 215;
let percent = 0;
let obj = {0: 215};

//test




//CONTROLS

const exitAlt = document.getElementById('exit-altitude');
const pullAlt = document.getElementById('pull-altitude');

const go = document.getElementById('go');

let exitChoice = exitAlt.value;
let pullChoice = pullAlt.value;


//test
for (i = 1; i <= 20; i += 1) {
  init = init + 0.75;
  obj[i] = init;
};

console.log(obj);
//test


go.addEventListener('click', () => {

  exitChoice = parseInt(exitAlt.value);
  pullChoice = parseInt(pullAlt.value);

exitChoice = exitAlt.value;
    pullChoice = pullAlt.value;
  
    loss = 100 - (exitChoice * 6.666666667);
  
    const dropAlittude = setInterval(() => {
      altitudeDrop = loss + 1.17333333;
      altitudeLoss.style.height = altitudeDrop + '%';
      loss = loss + 0.011733333;

      //test
      Object.getOwnPropertyNames(obj).forEach(name => {
        if (parseInt(name) == parseInt(loss)) {
          arm.style.transform = 'rotate(' + obj[name] + 'deg)';
        }
      })
      //test
  
  
  
      if ((100 - (pullChoice * 6.666666667)) < altitudeDrop) {
        clearInterval(dropAlittude);
      }
  
  
  
  
    }, 10);

console.log(exitAlt.value);
console.log(pullChoice);








});

//ALTIMETER

//REMOVE/ADD GREEN LINE

let lastExitAlt = '';  

exitAlt.addEventListener('change', exitAltitudeIndicator);

function exitAltitudeIndicator() {
  exitChoice = parseInt(exitAlt.value);
  pullChoice = parseInt(pullAlt.value);
  if (exitChoice <= pullChoice) {
    alert('Exit altitude needs to be greater than pull altitude!');
  } else {  
      altiLines.forEach(num => {
        if (parseInt(num.textContent) == parseInt(exitAlt.value)) {
          if (lastExitAlt != '') {
            altiLines.forEach(num => {
              if (parseInt(num.textContent) == lastExitAlt) {
                num.style.borderTopStyle = 'dotted';
                num.style.borderWidth = '1px';
                num.style.borderTopColor = 'black';
              }
            })
          }
          num.style.borderTopStyle = 'solid';
          num.style.borderWidth = '2px';
          num.style.borderTopColor = 'green';
          lastExitAlt = parseInt(num.textContent);
    }
      })
  }
}

let lastPullAlt = '';

pullAlt.addEventListener('change', pullAltitudeIndicator);

function pullAltitudeIndicator() {
  exitChoice = parseInt(exitAlt.value);
  pullChoice = parseInt(pullAlt.value);
  if (exitChoice <= pullChoice) {
    alert('Exit altitude needs to be greater than pull altitude!');
  } else { 
    altiLines.forEach(num => {
      if (parseInt(num.textContent) == parseInt(pullAlt.value)) {
        if (lastPullAlt != '') {
          altiLines.forEach(num => {
            if (parseInt(num.textContent) == lastPullAlt) {
              num.style.borderTopStyle = 'dotted';
              num.style.borderWidth = '1px';
              num.style.borderTopColor = 'black';
            }
          })
        }
        num.style.borderTopStyle = 'solid';
        num.style.borderWidth = '2px';
        num.style.borderTopColor = 'red';
        lastPullAlt = parseInt(num.textContent);
      }
    })
  }
}








// for (i = 0; i < 2000; i += 1) {
//   console.log(Object.getOwnPropertyNames(obj[i]));
// }


















