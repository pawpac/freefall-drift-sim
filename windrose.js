const direction = document.querySelectorAll('.direction-container');
const marking = document.querySelectorAll('.marking');
const windroseFace = document.querySelector('.face');

let rotation = 0;

direction.forEach(element => {
  element.style.transform = 'rotate(' + rotation + 'deg)'
  rotation = rotation + 22.5;
});

marking.forEach(element => {
  element.style.transform = 'rotate(' + rotation + 'deg)'
  rotation = rotation - 22.5;
});

for (i = 0; i < 360; i += 20) {
  let degreeContainer = document.createElement('div');
  let degree = document.createElement('div');
  degreeContainer.classList.add('degree-container');
  degreeContainer.style.transform = 'rotate(' + i +'deg)';
  degree.classList.add('degree');
  degree.textContent = i;
  windroseFace.appendChild(degreeContainer);
  degreeContainer.appendChild(degree);
}

