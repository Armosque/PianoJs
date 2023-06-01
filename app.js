let buttons = document.querySelectorAll('button');

buttons.forEach((button)=>button.addEventListener('click', playSound));

function playSound (event) {
    let button = event.target;
    let note = button.dataset.note;
        
    
    
    let audio = document.getElementById(`audio${note}`);
    audio.pause();
    audio.currentTime = 0;
    audio.play();

    removeActiveClass();
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 500);
}

function removeActiveClass() {
    buttons.forEach((button) => button.classList.remove('active'));
}

document.addEventListener('keydown', (event)=>{
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if(!button){
        alert('tecla invalida')
    }else{
        button.click()}
    
});
