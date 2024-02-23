const turnOn = document.getElementById('ligar');
const turnOff = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function ligar (){ 
 lamp.src = 'ligada.jpg'
}
    


turnOn.addEventListener('click',ligar)

function desligar (){
    lamp.src = 'desligada.jpg'

}
turnOff.addEventListener('click', desligar)

