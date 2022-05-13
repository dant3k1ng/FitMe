var startWater = 0;
var classNum = 1;

function addWater(){
    addOut(startWater = startWater + 500, classNum++);
    
    if(startWater > 3000 && val2 > 6)
    {
        startWater = 3000;
        classNum = 6
    }
}

function addOut(val, val2){
    if (val > 3000 && val2 > 6)
    {
        val = 3000;
        val2 = 6;

        document.getElementById("add").style.display = "none";
    }
    else
    {
        document.getElementById('outWater').innerHTML = val;
        document.getElementById(val2).classList.toggle('full-cup');
    }
}

function reset(){
    document.getElementById('1').classList.remove('full-cup');
    document.getElementById('2').classList.remove('full-cup');
    document.getElementById('3').classList.remove('full-cup');
    document.getElementById('4').classList.remove('full-cup');
    document.getElementById('5').classList.remove('full-cup');
    document.getElementById('6').classList.remove('full-cup');

    document.getElementById('outWater').innerHTML = "0";
    document.getElementById("add").style.display = "flex";
    
    startWater = 0;
    classNum = 1;
}

/*document.getElementById("remove").style.display = "flex";
document.getElementById("add").style.display = "flex";

function removeWater() {
    removeOut(startWater = startWater - 500, classNum--);
    if(startWater <= 0 && val2 <= 0)
    {
        startWater = 0;
        classNum = 1
    }
}

function removeOut(){
    if (val < 0 && val2 <= 2)
    {
        val = 0;
        val2 = 1;

        document.getElementById("remove").style.display = "none";
    }
    else
    {
        document.getElementById('outWater').innerHTML = val;
        document.getElementById(val2).classList.toggle('empty-cup');
    }   
}*/