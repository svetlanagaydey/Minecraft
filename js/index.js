const field = document.querySelector('.playGraund');

let mtrx = createMatrix(20, 20);
createSmallCloud(2, 2);
createBidCloud(8, 3);
createTree(8, 16);
createBush(1, 16);
createStone(14, 16);
createStone(18, 16);
console.log(mtrx);

function createMatrix(rowsNum, colomnsNum){
  const matrix = [];
  // document.querySelector('.playGraund').gridTemplateRows=`repeat(${rowsNum}, 2fr)`;
  // document.querySelector('.playGraund').gridTemplateColumns=`repeat(${colomnsNum}, 2fr)`;
  for (let i=1; i<=rowsNum; i++) {
    const row = [];
    for (let j=1; j<=colomnsNum; j++) {
      const playBlock = document.createElement('div');
      playBlock.id = `x${j}y${i}`;
      playBlock.classList.add('playItem');
      if (i===17) {
        playBlock.classList.add('grass');
      } else if (i > 17 && i <=rowsNum) {
        playBlock.classList.add('dirt');
      }
      field.appendChild(playBlock);
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
