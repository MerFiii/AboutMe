const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background = '#141414';
        body.style.color = 'white';
        body.style.transition = '2s';
    }else{
        body.style.background = '#F8F8FF';
        body.style.color = 'black';
        body.style.transition = '2s';
    }
});