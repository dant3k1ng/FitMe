function multiClose(nameClass){
    if(!document.getElementById(nameClass).classList.contains('hide'))
        document.getElementById(nameClass).classList.toggle('hide');
}

function multiOpen(nameClass){
    document.getElementById(nameClass).classList.remove('hide');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}