window.onwheel = e => {
    if(e.deltaY >= 50){
        document.getElementById('navbar').classList.add('smaller-nav');
        document.getElementById('user-menu').classList.add('smaller-img');
        document.getElementById('logo').classList.add('smaller-img');
    }
    else if(e.deltaY <= 50){
        document.getElementById('navbar').classList.remove('smaller-nav');
        document.getElementById('user-menu').classList.remove('smaller-img');
        document.getElementById('logo').classList.remove('smaller-img');
    }
}