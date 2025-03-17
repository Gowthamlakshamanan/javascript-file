function loop(n) {
    for (i = 0; n >= i; i--) {
        partten = "";
        for (j = 0; i >=j; j--) {
            partten += "*";
        }
        console.log(partten);
    }
} loop(3);



// function num(n) {
//     for (let i = 0; i <= n; i++) {
//         let pattern = "";
//         for (let j = 0; j <= i; j++) {
//             pattern += "*";
//         } console.log(pattern);
//     }
// } num(2);
