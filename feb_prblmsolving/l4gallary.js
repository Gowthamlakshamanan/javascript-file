// 1    1
// 22  22
// 333333

// let n=3;
// for(let i=1;i<=n;i++){
//     let row="";
//     for(let j=1;j<=i;j++){
//         row+=i;
//     }
//     for(let k=n-1;k>=i;k--){
//         row+="  ";
//     }
//     for(let z=1;z<=i;z++){
//         row+=i;
//     }
//     console.log(row);
// }

// function find(a,b){
// for(let i=0;i<a.length;i++){
// if(a[i]==b){
//     return true;
// }
// }
// return false;
// }
// console.log(find(["vajesh","divi","gowtham"],"immanuel"))

// let int = [28, 19, 5, 33, 20, 8, 21, 24, 42, 39, 29, 46, 38, 13, 45, 3, 23, 50, 4, 30, 
//     37, 2, 25, 34, 1, 32, 35, 26, 16, 49, 18, 6, 27, 41, 43, 36, 48, 7, 40, 17, 
//     10, 12, 14, 44, 47, 31, 22, 9, 11, 15];
//  let x=24;
//  for(let i=0;i<int.length;i++){
//    if(x===int[i]){
//     console.log(i);
//    }
//  }

// let int = [28, 19, 5, 33, 20, 8, 21, 24, 42, 39, 29, 46, 38, 13, 45, 3, 23, 50, 4, 30, 
//      37, 2, 25, 34, 1, 32, 35, 26, 16, 49, 18, 6, 27, 41, 43, 36, 48, 7, 40, 17, 
//         10, 12, 14, 44, 47, 31, 22, 9, 11, 15];
// let sort = int.sort((a,b)=>a-b);
//  let x = 24;
//  let right=sort.length-1;
//  let left =0
//   while(left<=right){
//       let mid = Math.floor(left+right/2);
//       if(x===sort[mid]){
//           console.log(mid);
//           break;
//       }
//       else if(sort[mid]< x){
//           left = mid+1;
//       }
//       else{
//           right =mid-1;
//       }
// }

// function countWordsStartingWithVowel(sentence) {
//   let vowels = "aeiouAEIOU";
//   let words = sentence.split(" ")
//   let count = 0;

//   for (let word of words) {
//       if (vowels.includes(word[0])) {
//           count++;
//       }
//   }
//   console.log(count);
// }
// countWordsStartingWithVowel("Apple orange umbrella"); // Output: 3
// countWordsStartingWithVowel(" An Elephant is Inside the Oasis "); // Output: 5
// countWordsStartingWithVowel("Hello world"); // Output: 0
// countWordsStartingWithVowel("  umbrella   under    ice cube  "); // Output: 3
/////////////////////////////////////////////////////////////////////////////////////


// function arr(a){
//   let max=a[0];
//   for(let i=0;i<=a.length;i++){
//       if(a[i]>max){
//           max=a[i];
//       }
//   }
//   let tot=0;
//   for(let j=0;j<a.length;j++){
//       if(a[j]==max){
//           tot++;
//       }
//   }
// return tot;
// }
// console.log(arr([1,2,3,4,5,6,6,6]));

function reverse(name){
    let reverse="";
    for(let i=name.length-1;i>=0;i--){
        reverse+=name[i];
    }
    return reverse;
}
let result=reverse("GOWTHAM IMMANUEL");
console.log(result);