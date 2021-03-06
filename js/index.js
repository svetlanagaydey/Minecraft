const field = document.querySelector('.playGraund');
const block = document.querySelectorAll('.playItem');

createMatrix();
createSmallCloud(2, 2);
createBidCloud(8, 3);
createTree(8, 16);
createBush(1, 16);
createStone(14, 16);
createStone(18, 16);

let user = {
  tool: '',
  inverting: false
}

const pisckaxe = document.querySelector('#pickaxe');
const shovel = document.querySelector('#shovel');
const axe = document.querySelector('#axe');
const invers = document.querySelector('.inverting');
const inversInnerDiv = document.createElement("div");

pisckaxe.addEventListener('click', function(){ 
  user.tool = "pickaxe";
  user.inverting = false;
  pisckaxe.classList.toggle('chousen-instument');
  if (shovel.classList.contains('chousen-instument')) {
    shovel.classList.toggle('chousen-instument')
  }
  if (axe.classList.contains('chousen-instument')) {
    axe.classList.toggle('chousen-instument')
  }
  if (invers.classList.contains('chousen-inversing')) {
    invers.classList.toggle('chousen-inversing')
  }
})

shovel.addEventListener('click', function(){ 
  user.tool = "shovel";
  user.inverting = false;
  shovel.classList.toggle('chousen-instument');
  if (pisckaxe.classList.contains('chousen-instument')) {
    pisckaxe.classList.toggle('chousen-instument')
  }
  if (axe.classList.contains('chousen-instument')) {
    axe.classList.toggle('chousen-instument')
  }
  if (invers.classList.contains('chousen-inversing')) {
    invers.classList.toggle('chousen-inversing')
  }
})

axe.addEventListener('click', function(){ 
  user.tool = "axe";
  user.inverting = false;
  axe.classList.toggle('chousen-instument');
  if (pisckaxe.classList.contains('chousen-instument')) {
    pisckaxe.classList.toggle('chousen-instument')
  }
  if (shovel.classList.contains('chousen-instument')) {
    shovel.classList.toggle('chousen-instument')
  }
  if (invers.classList.contains('chousen-inversing')) {
    invers.classList.toggle('chousen-inversing')
  }
})

invers.addEventListener('click', function() {
  user.inverting = true;
  user.tool = "";
  invers.classList.add('chousen-inversing');
  if (pisckaxe.classList.contains('chousen-instument')) {
    pisckaxe.classList.remove('chousen-instument')
  }
  if (shovel.classList.contains('chousen-instument')) {
    shovel.classList.remove('chousen-instument')
  }
  if (axe.classList.contains('chousen-instument')) {
    axe.classList.remove('chousen-instument')
  }
})


function createMatrix(){
  let matrix = [];
  // document.querySelector('.playGraund').gridTemplateRows=`repeat(${rowsNum}, 2fr)`;
  // document.querySelector('.playGraund').gridTemplateColumns=`repeat(${colomnsNum}, 2fr)`;
  for (let i=1; i<=20; i++) {
    let row = [];
    for (let j=1; j<=20; j++) {
      let playBlock = document.createElement('div');
      playBlock.id = `x${j}y${i}`;
      playBlock.classList.add('playItem');
      if (i===17) {
        playBlock.classList.add('grass');
      } else if (i > 17 && i <=20) {
        playBlock.classList.add('dirt');
      }
      field.appendChild(playBlock);

      playBlock.addEventListener('click', function(){
        if (user.inverting === false) {
          if ((user.tool === 'pickaxe')&&(playBlock.classList.contains('stone'))) {
            playBlock.setAttribute('class', 'playItem');
            inversInnerDiv.setAttribute('class', 'stone');
            invers.appendChild(inversInnerDiv);
          } else if ((user.tool === 'shovel')&&(playBlock.classList.contains('dirt'))) {
            playBlock.setAttribute('class', 'playItem');
            inversInnerDiv.setAttribute('class', 'dirt');
            invers.appendChild(inversInnerDiv);
          } else if ((user.tool === 'shovel')&&(playBlock.classList.contains('grass'))) {
            playBlock.setAttribute('class', 'playItem');
            inversInnerDiv.setAttribute('class', 'grass');
            invers.appendChild(inversInnerDiv);
          } else if ((user.tool === 'axe')&&(playBlock.classList.contains('oak'))) {
            playBlock.setAttribute('class', 'playItem');
            inversInnerDiv.setAttribute('class', 'oak');
            invers.appendChild(inversInnerDiv);
          }  else if ((user.tool === 'axe')&&(playBlock.classList.contains('leaves'))) {
            playBlock.setAttribute('class', 'playItem');
            inversInnerDiv.setAttribute('class', 'leaves');
            invers.appendChild(inversInnerDiv);
          }
          // if wrong instrument was choosen 
          else if (!playBlock.classList.contains('stone') && user.tool == 'pickaxe') {
            pisckaxe.classList.add('needed-instrument');
            setTimeout( () => {
              pisckaxe.classList.remove('needed-instrument');
            }, 100);
          } else if (!playBlock.classList.contains('dirt') && user.tool == 'shovel') {
            shovel.classList.add('needed-instrument');
            setTimeout( () => {
              shovel.classList.remove('needed-instrument');
            }, 100);
          } else if (!playBlock.classList.contains('grass') && user.tool == 'shovel') {
            shovel.classList.add('needed-instrument');
            setTimeout( () => {
              shovel.classList.remove('needed-instrument');
            }, 100);
          } else if (!playBlock.classList.contains('oak') && user.tool == 'axe') {
            axe.classList.add('needed-instrument');
            setTimeout( () => {
              axe.classList.remove('needed-instrument');
            }, 100);
          } else if (!playBlock.classList.contains('leaves') && user.tool == 'axe') {
            axe.classList.add('needed-instrument');
            setTimeout( () => {
              axe.classList.remove('needed-instrument');
            }, 100);
          }

        }
        else {
          let innerInversDiv = document.querySelector(".inverting div");
          playBlock.setAttribute('class', innerInversDiv.getAttribute('class'));
          invers.removeChild(innerInversDiv);
        }
      })
      row.push(playBlock);
    }
    matrix.push(row);
  }
  return matrix;   
}

function createSmallCloud(startX, startY) {
  document.querySelector(`#x${startX}y${startY}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+1}y${startY}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+1}y${startY+1}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+2}y${startY+1}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+2}y${startY}`).setAttribute('class', 'cloud');
}

function createBidCloud(startX, startY) {
  document.querySelector(`#x${startX}y${startY}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+5}y${startY}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+6}y${startY}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+7}y${startY}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+1}y${startY+1}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+2}y${startY+1}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+3}y${startY+1}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+4}y${startY+1}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+5}y${startY+1}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+3}y${startY+2}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+4}y${startY+2}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+5}y${startY+2}`).setAttribute('class', 'cloud');
  document.querySelector(`#x${startX+6}y${startY+2}`).setAttribute('class', 'cloud');
}

function createTree(startX, startY) {
  document.querySelector(`#x${startX}y${startY}`).setAttribute('class', 'oak');
  document.querySelector(`#x${startX}y${startY-1}`).setAttribute('class', 'oak');
  document.querySelector(`#x${startX}y${startY-2}`).setAttribute('class', 'oak');
  document.querySelector(`#x${startX-1}y${startY-3}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX}y${startY-3}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX+1}y${startY-3}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX-1}y${startY-4}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX}y${startY-4}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX+1}y${startY-4}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX-1}y${startY-5}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX}y${startY-5}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX+1}y${startY-5}`).setAttribute('class', 'leaves');
}

function createBush(startX, startY) {
  document.querySelector(`#x${startX}y${startY}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX+1}y${startY}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX}y${startY-1}`).setAttribute('class', 'leaves');
  document.querySelector(`#x${startX+1}y${startY-1}`).setAttribute('class', 'leaves');
}

function createStone(startX, startY) {
  document.querySelector(`#x${startX}y${startY}`).setAttribute('class', 'stone');
  document.querySelector(`#x${startX+1}y${startY}`).setAttribute('class', 'stone');
  document.querySelector(`#x${startX+1}y${startY-1}`).setAttribute('class', 'stone');
}
