function fibo1(n){

    let a=0;
    let b=1;

    for(let i=2;i<=n;i++){

        let c = a + b;

        a = b;
        b = c;
    }

    console.log("Fibonacci = "+b);
}
function fibo2(val){

    let a=0;
    let b=1;
    let rang=1;

    while(b <= val){

        let c = a + b;

        a = b;
        b = c;

        rang++;
    }

    console.log("Premier terme > "+val+" = "+b+" au rang "+rang);
}