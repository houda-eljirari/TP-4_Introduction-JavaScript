function triangle1(n){

    let i = 1;

    while(i <= n){

        let ligne = "";
        let j = 1;

        while(j <= i){
            ligne += "*";
            j++;
        }

        console.log(ligne);

        i++;
    }
}

function triangle2(n){

    for(let i=1;i<=n;i++){

        let ligne="";

        for(let j=1;j<=i;j++){
            ligne += "*";
        }

        console.log(ligne);
    }
}