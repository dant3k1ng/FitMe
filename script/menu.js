var isOpen = false;

function openMenu(){
    if(isOpen == false)
    {
        document.getElementById("menu").classList.remove("close-menu");
        document.getElementById("menu").classList.add("open-menu");
    }

    isOpen = true;
};

window.onclick = function closeMenu(){
    if(isOpen == false)
    {
        document.getElementById("menu").classList.remove("open-menu");
        document.getElementById("menu").classList.add("close-menu");
    }

    isOpen = false;
};