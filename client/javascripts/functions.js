//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = (n) => {
  let none = "Not"
   let result = "";
   if (n%3 == 0){
     result = "Bit";
   }
   if (n%5 == 0){
     result = result + "Bat";
   }
   if (n%7 == 0){
     result = result + "Bot";
   }
   if (result == ""){
     return none;
   }
   return result;
}

let findAllbitBatBotOrNots1 = (arr) => {
  let findSingleBitBatBotOrNot = (n) => {
    let toStr = (n).toString();
    let result = "";
    let findBit = bitBatBotOrNot(n);
    result = toStr + ": " + findBit;
    return result;
  }
   let result = arr.map(findSingleBitBatBotOrNot);
   return result;
   //use map method
}

let findAllbitBatBotOrNots2 = (arr) => {
  let len = arr.length;
  let result = [];
   for (let i = 0; i < len; i ++){
     let findBit = bitBatBotOrNot(arr[i]);
     let toStr = (arr[i]).toString();
     let arrElement = toStr + ": " + findBit;
     result.push(arrElement);
   }
   return result;
   //use for statement
}


let findAllbitBatBotOrNots3 = (arr) => {
  result = [];
   for (let i of arr){
     let findBit = bitBatBotOrNot(i);
     let toStr = i.toString();
     let arrElement = toStr + ": " + findBit;
     result.push(arrElement);
   }
   return result;
   //use for..of statement
}

let findAllbitBatBotOrNots4 = (arr) => {
  let counter = 0;
   result = [];
   arr.forEach(bitBatBotOrNot(element){
     let toStr = arr[counter].toString();
     let arrElement = toStr + ": " + element;
     result.push(arrElement);
   })
   return result;
   //use forEach method
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100)

findAllbitBatBotOrNots2(arrOf1To100)

findAllbitBatBotOrNots3(arrOf1To100)

findAllbitBatBotOrNots4(arrOf1To100)
