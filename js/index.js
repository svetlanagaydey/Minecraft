const field = document.querySelector('.playGraund');

for (let i=1; i<=20; i++) {
    for (let j=1; j<=20; j++) {
        const playBlock = document.createElement('div');
        playBlock.id = `x${j}y${i}`;
        playBlock.classList.add('playItem');
        field.appendChild(playBlock);
    }
}

createSmallCloud(2, 3);
createBidCloud(12, 3)
create

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
