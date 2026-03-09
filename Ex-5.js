function premier(n){

    if(n < 2){
        console.log("Pas premier");
        return;
    }

    for(let i=2;i<=Math.sqrt(n);i++){

        if(n % i == 0){
            console.log(n+" n'est pas premier, divisible par "+i);
            return;
        }
    }

    console.log(n+" est un nombre premier");
}