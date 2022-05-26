'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let total = 0;
  for(let i =0; i < num.length; i++){
    total += num[i] * Math.pow(2, num.length -1 -i); 
  }
  return Number(total);

}

function DecimalABinario(num) {
  // tu codigo aca
  let adividir = num
  let binario = []
 while (adividir > 0) {
   binario.push(adividir % 2)
   adividir = Math.floor(adividir/2)
 }
return binario.reverse().join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}