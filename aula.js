
//function multiplicar números em array por outro fator

// function mult (arr, multi) {
//     for (let i = 0; i < arr.length; i ++){
//       arr[i] = multi * arr[i];
//     }
//     return arr
//   }
//   console.log(mult([1,2,3,4,5], 3))

//function retornar array apenas com números positivos, modificando os negativos por 0

//   function onlyPositiveNumbers(arr) {
//     for (let i = 0; i < arr.length ; i++){
//       arr.length = 40
//       if (arr[i] < 0){
//     arr[i] = 0 
//     } 
      
//    }
//     return arr
//   }
//   console.log(onlyPositiveNumbers([1,-2, 3,-4,5,-10]))
  

//função que recebe um array. Percorre este array, soma quantos números pares este array possuí e retorna a soma.

// function somaPar(arr){
//     let soma = 0
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//       soma += arr[i]
//       }
//     } 
//   return soma
// }
// console.log(somaPar([1,2,3,4,5,6,7,8]))

// Crie uma função que receba um array de números retorne a soma dos primeiros 5 números ímpares desse array.

// function somaImp (arr){
//   let total = 0;
//   let arr2=[];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 !== 0){
//       arr2.push(arr[i])
//     }
//   }
//   for (let a = 0; a < arr2.length; a++){
//     total += arr2[a]
//     arr2.length = 5
//   }
//    return total 
// }
// console.log(somaImp([1,2,3,4,5,6,7,8,9,11]))

// Crie uma função chamada convertTime que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.

// function convertTime (anos,meses,dias){
//     let total = 0;
//     let anos1 = (365 * anos);
//     let meses1 = (30 * meses);
//     total = anos1 + meses1 + dias
//     return total
//   }
  
//   console.log(convertTime(27,5,4))

// Crie uma função chamada isPrime que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro caso o seja primo e Falso em caso contrário.

// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
  
// }else if (number > 1) {
//  for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//                 }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
//   else {
//     console.log("The number is not a prime number.");
// }
// /\ - fonte :https://www.programiz.com/javascript/examples/prime-number#:~:text=A%20prime%20number%20is%20a,the%20first%20few%20prime%20numbers.

// Minha Versão do exercício

// function isPrime (valor){
//     let isPrime = true;
    
//     if (valor === 1){
//       console.log(false);
//     }else if (valor > 1){
//       for (let i = 2; i < valor; i++) {
//         if (valor % i == 0) {
//         isPrime = false;
//         }
//       } 
//     }
//     return isPrime
//   }
//   console.log(isPrime(6))

// Crie uma função chamada isPerfect que verifique se um valor é perfeito ou não. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio. (Ex: 6 é perfeito, 6 = 1 + 2 + 3, que são seus divisores). A função deve retornar um valor booleano.

// function isPerfect (valor){
//     let isPerfect = true;
//     let valor2 = [];
//     let total = 0;
    
    
//     if (valor === 1){
//       console.log(false);
//     }else if (valor > 1){
//       for (let i = 1; i < valor; i++) {
//         if (valor % i == 0 && i !== valor) {
//          valor2.push(i)
//         }
//       } 
//     }
//       for (let a = 0; a < valor2.length; a++) {
//         total += valor2[a]
//       }
//       if (total === valor) {
//         isPerfect = true;
//       }else{
//         isPerfect = false;
//       }
//   return isPerfect
//   }
// console.log(isPerfect(6))

// Crie uma função que leia três parametros (a, b e c) e mostre-os na ordem lida. Em seguida, mostre-os em ordem crescente e decrescente.

// function  three(num1,num2,num3){
//     let three1 = [];
//     three1.push([num1],[num2],[num3]);
//     let three2 = [];
//     let three3 = [];
//     let total = [];
    
//     if (num1 >= num2 && num2 >= num3){
//         three2.push([num1],[num2],[num3]);
//         three3.push([num3],[num2],[num1]);
//     }
//      if (num1 >= num3 && num3 >= num2){
//         three2.push([num1],[num3],[num2]);
//         three3.push([num2],[num3],[num1]);
//      }
//      if (num2 >= num1 && num1 >= num3){
//         three2.push([num2],[num1],[num3]);
//         three3.push([num3],[num1],[num2]);
//      }
//      if (num2 >= num3 && num3 >= num1){
//         three2.push([num2],[num3],[num1]);
//         three3.push([num1],[num3],[num2]);
//      }
//      if (num3 >= num1 && num1 >= num2){
//         three2.push([num3],[num1],[num2]);
//         three3.push([num2],[num1],[num3]);
//      }
//      if (num3 >= num2 && num2 >= num1){
//         three2.push([num3],[num2],[num1]);
//         three3.push([num1],[num2],[num3]);
//      }
//     total = (three1+" - "+three2+" - "+ three3)
//     return total
    
//   }
//   console.log(three(5,3,17))

// Crie uma função que receba um array com a idade de dez pessoas. Calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

// function pessoas (arr){
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//       if (arr[i] >= 18){
//          total += 1;
//         arr.length = 10;
//       }    
//     }
//     return total
//   }
  
//   console.log(pessoas([2,18,19,22,12,34,14,13,12,21]))

// Crie uma função que receba um array com dez números e usando laços de repetição calcule e mostre a quantidade de números entre 30 e 90.

// function entre (arr){
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//       if (arr[i] > 30 && arr[i] < 90){
//         total += 1;
//         arr.length=10;
//       }
//     }
//     return total
//   }
//   console.log(entre([1,30, 45, 52, 31, 27, 72, 92, 36, 41]))

// function int (valor){
//     let pares = [];
//     let impares = [];
    
//     for (let i = 1; i <= valor ; i = i + 1){
//       if (i % 2 !== 0){
//         impares.push(i);
//       }else{
//         pares.push(i);
//       }
//     }
//     return (`São pares = ${pares}, São ímpares = ${impares} `);
//     }
  
  
//   console.log(int(10))