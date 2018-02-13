const katzDeli = [];

function takeANumber(katzDeliLine, newCustomer){
  for(let i = 0; i < katzDeliLine.length; i++){
    katzDeliLine.push(newCustomer);
  }
  return `You are number ${katzDeliLine[newCustomer]}`
}
