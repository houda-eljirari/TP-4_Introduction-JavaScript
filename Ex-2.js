function hjms(secondes){

    let jours = Math.floor(secondes / 86400);
    secondes = secondes % 86400;

    let heures = Math.floor(secondes / 3600);
    secondes = secondes % 3600;

    let minutes = Math.floor(secondes / 60);
    secondes = secondes % 60;

    console.log(jours+" jours "+heures+" heures "+minutes+" minutes "+secondes+" secondes");
}