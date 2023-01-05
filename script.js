
score = 0;
// jab hamara toy use cross karega tabhi ye count hoga otherwise nhi
cross = true;

// for song
audio = new Audio('/cover music.wav');

setTimeout(()=>{
    audio.play();
},1000);

// jab bhi ham kisi key ko dabakar ya down karke rakehnge to ye continuor kam karta rahehga
document.onkeydown = function(e)
{
    console.log("key code is : ", e.keyCode);

    if(e.keyCode == 38)
    {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        },700)
    }

    // ye use aage badane ke liye hai
    if(e.keyCode == 39)
    {
        dino = document.querySelector('.dino');
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dx + 112 + 'px';
    }

    // use piche le jane ke liye hai
    if(e.keyCode == 37)
    {
        dino = document.querySelector('.dino');
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dx - 112) + 'px';
    }
}

setInterval( ()=> {
dino = document.querySelector('.dino');
gameOver = document.querySelector('.gameOver');
obstacle = document.querySelector('.obstacle');


dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
dinoY = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))

obstacleX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
obstacleY = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

offsetX = Math.abs(dinoX-obstacleX);
offsetY = Math.abs(dinoY-obstacleY);

if(offsetX< 75 && offsetY <50){
    gameOver.style.visibility = 'visible';
    obstacle.classList.remove('obstacleAni');



    setTimeout(() => {
        audio.pause();
    }, 1000);

}

else if(offsetX <145 && cross){
    score += 1;
    updateScore(score);
    cross = false;

    setTimeout(()=>{
        cross = true;

    },1000);

    // ye wala setTimeout jese jese ham aage bdte jayenge us chiti ki speed badti jayegi
setTimeout(()=>{
    aniDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
    newDuration = aniDuration - 0.1;
    obstacle.style.animationDuration = newDuration + 's';
})

}


},10)


function updateScore(score){
    scoreCont.innerText = "Your Score "+ score;
}


// https://pixabay.com/sound-effects/id-43894/

