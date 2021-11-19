

const prime_factor = (num) =>{
    for (let i = 2; i <= num; i++) {
        if (num%i === 0) {
            num = num / i;
            console.log("${i} is i");
        };
    };
}

let num = 13195;

prime_factor(num);