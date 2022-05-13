function openDetails(num){
    if(document.getElementById("mealDet" + num).classList.contains ('hide'))
        document.getElementById("mealDet" + num).classList.remove('hide');
    else
        document.getElementById("mealDet" + num).classList.add('hide');
}