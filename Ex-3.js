function troisNombres(a,b,c){

    let tab = [a,b,c];

    tab.sort(function(x,y){
        return x-y;
    });

    console.log("Ordre croissant : "+tab[0]+" "+tab[1]+" "+tab[2]);
}