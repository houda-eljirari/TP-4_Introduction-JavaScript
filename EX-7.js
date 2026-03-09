function Raca1(A){

    let u = A/2;

    while(Math.abs(u*u - A) >= 0.00001){

        u = 0.5 * (u + A/u);
    }

    console.log("Valeur approchée = "+u);
}