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
invers.setAttribute('material', '');

pisckaxe.addEventListener('click', function(){ 
  user.tool = "pickaxe"
})
shovel.addEventListener('click', function(){ 
  user.tool = "shovel"
})
axe.addEventListener('click', function(){ 
  user.tool = "axe"
})

invers.addEventListener('click', function() {
  user.inverting='true';
})


function createMatrix(){
  let matrix = [];
  // document.querySelector('.playGraund').gridTemplateRows=`repeat(${rowsNum}, 2fr)`;
  // document.querySelector('.playGraund').gridTemplateColumns=`repeat(${colomnsNum}, 2fr)`;
  for (let i=1; i<=20; i++) {
    let row = [];
    for (let j=1; j<=20; j++) {
      let playBlock = document.createElement('div');
  console.log(playBlock);
      playBlock.id = `x${j}y${i}`;
      playBlock.classList.add('playItem');
      if (i===17) {
        playBlock.classList.add('grass');
      } else if (i > 17 && i <=20) {
        playBlock.classList.add('dirt');
      }
      field.appendChild(playBlock);
      playBlock.addEventListener('click', function(){
        if ((user.tool === 'pickaxe')&&(playBlock.classList.contains('stone'))) {
          playBlock.setAttribute('class', 'playItem');
          invers.setAttribute('material', 'stone');
        } else if ((user.tool === 'shovel')&&(playBlock.classList.contains('dirt'))) {
          playBlock.setAttribute('class', 'playItem');
          document.querySelector('.inverting').classList.add('dirt');
        } else if ((user.tool === 'shovel')&&(playBlock.classList.contains('grass'))) {
          playBlock.setAttribute('class', 'playItem');
          document.querySelector('.inverting').classList.add('grass');
        } else if ((user.tool === 'axe')&&(playBlock.classList.contains('oak'))) {
          playBlock.setAttribute('class', 'playItem');
          document.querySelector('.inverting').classList.add('oak');
        }  else if ((user.tool === 'axe')&&(playBlock.classList.contains('leaves'))) {
          playBlock.setAttribute('class', 'playItem');
          document.querySelector('.inverting').classList.add('leaves');
        } else if (user.inverting === true) {
          
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
