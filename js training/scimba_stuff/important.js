/*

    THIS FUNCITON TAKES ALL ALPHABETS FROMA  STRING AND REPLACES THEM WITH THE NEXT LETTER IN THE ALPHABET. It does the same
    with nubmers. If there is a - sign right before a number it will be treated as a negative.
    EXAMPLE: THE STRING "ABC1-23DEF" WOULD RETURN "BCD2-14EFG"
    hello!!! => HELLO =>['H', 'E', 'L', 'L', 'O'] => ['i', ]
    Ifmmp
*/


let lettersAssembled = {
    A : 'B',
    B : 'C',
    C : 'D',
    D : 'E',
    E : 'F',
    F : 'G',
    G : 'H',
    H : 'I',
    I : 'J',
    J : 'K',
    K : 'L',
    L : 'M',
    M : 'N',
    N : 'O',
    O : 'P',
    P : 'Q',
    Q : 'R',
    R : 'S',
    S : 'T',
    T : 'U',
    U : 'V',
    V : 'W',
    W : 'X',
    X : 'Y',
    Y : 'Z',
    Z : 'A'
}
function crypticConverter(str){
    let message = str.toUpperCase()
    let container = message.split('')
    let container2 = []
    for(var i = 0; i < container.length; ++i){
        if(lettersAssembled.hasOwnProperty(container[i])){
            container2.push(lettersAssembled[container[i]].toLowerCase())
            
        } else if(!isNaN(Number(container[i]))){
            if(container[i-1] == '-'){
                container2.push(Number(container[i]-1))
            } else{
                container2.push(Number(container[i])+1)
            } 
        } else {
            container2.push(container[i])
        }
        console.log(i)
    }
    container2[0] = container2[0].toUpperCase()
    let message2 = container2.join('')
    return message2
}
console.log(crypticConverter("Roby"))



/*

    THIS FUNCITON TAKES AN ARRAY AND ADDS EACH ELEMENT TO THE ONE TO IT'S IMMEDIATE RIGHT. IN THE CASE IT IS THE LAST ELEMENT
    IT WILL ADD ITSELF TO THE FIRST INITIAL ELEMENT OF THE ORIGINAL ARRAY.

*/

// unfinished
// function incrementToNext(arr, repeat = 0){
//     let numbersadded = []
//     let i = 0
//     while(i <= repeat){
//         let a = arr[0]
//         for(let i of arr){
//             if(arr.indexOf(i) != arr.length-1){
//                 i += arr[arr.indexOf(i)+1]
//                 numbersadded.push(i)
//             } else {
//                 i += a 
//                 numbersadded.push(i)
//             }
//         }
//     }
    
//     return numbersadded
// }
// var numbers = [10, 20, 30, 40, 50]
// var a = numbers[0]
// var numbersadded = []
// for(let i of numbers) 
// {
//  if(numbers.indexOf(i) != numbers.length-1){
//      i += numbers[numbers.indexOf(i)+1]
//      numbersadded.push(i)
//  }  else { i += a 
//      numbersadded.push(i)
//  }
// }
// console.log(numbers[numbers.indexOf(20)+1])
// console.log(numbers)
// console.log(incrementToNext(numbers))
