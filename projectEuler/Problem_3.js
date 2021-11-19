var prime_factor = function (num) {
    for (var i = 2; i <= num; i++) {
        if (num % i === 0) {
            num = num / i;
            console.log(i + " is i");
        }
        ;
    }
    ;
};
var num = 13195;
prime_factor(num);
