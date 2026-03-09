function hjmsAmeliore(secondes){

    let jours = Math.floor(secondes / 86400);
    secondes %= 86400;

    let heures = Math.floor(secondes / 3600);
    secondes %= 3600;

    let minutes = Math.floor(secondes / 60);
    secondes %= 60;

    let resultat = "";

    if(jours > 0) resultat += jours + (jours==1 ? " jour " : " jours ");
    if(heures > 0) resultat += heures + (heures==1 ? " heure " : " heures ");
    if(minutes > 0) resultat += minutes + (minutes==1 ? " minute " : " minutes ");
    if(secondes > 0) resultat += secondes + (secondes==1 ? " seconde " : " secondes ");

    console.log(resultat);
}