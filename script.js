let initialnumber = 20;
let highscore = null;
let randomnumber = getrandomnumber(20);

function  getrandomnumber(max){
    return parseInt(Math.random()*max)
}
// console.log(randomnumber);

function reloadgame(){
 
    document.getElementsByClassName('score').innerText = initialnumber;
    document.querySelector('#sc').innerText = "Start guessing..."
    document.querySelector('.number').innerText = '?'
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.guess').value = ''



}
function maincheck(){
    inputnum = document.getElementById('guessid').value
    if(initialnumber!=0){
        if(inputnum<randomnumber){
            document.getElementById('sc').innerText = 'Guess higher Number'
            initialnumber--
            document.querySelector('.score').innerText = initialnumber

        }
        else if(inputnum>randomnumber){
            document.getElementById('sc').innerText = 'Guess Lower Number'
            initialnumber--
            document.querySelector('.score').innerText = initialnumber

        }
        else{
            document.getElementById('sc').innerText = 'Hurry Your Number is Match'
            document.querySelector('body').style.backgroundColor = "green"
            document.querySelector('.number').innerText = randomnumber;
            document.querySelector('.highscore').innerText = randomnumber;
            initialnumber--
            document.querySelector('.score').innerText = initialnumber
        }
    }
}

