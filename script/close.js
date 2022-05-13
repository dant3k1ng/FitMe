function closeWindow(){
    if(!document.getElementById("mealWindow").classList.contains('hide'))
    document.getElementById("mealWindow").classList.toggle('hide');
}

function addMeal(){
    document.getElementById("mealWindow").classList.remove('hide');
}

function addWorkout(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("createWorkout").classList.remove('hide');
}

function closeWorkout(){
    if(!document.getElementById("createWorkout").classList.contains('hide'))
    document.getElementById("createWorkout").classList.toggle('hide');
}
